import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { setEmailTemplate } from '../../utils/API';
import { EditorContext } from '../Provider';

const SaveButton = () => {
    const {
        queryParams: { token },
        templateData,
        subjectState: subject,
        titleState: name,
    } = useContext(EditorContext)

    const handleDisableButton = () => {
        if (!(templateData?.template?._id)) return true
        return false
    }

    const handleClick = async () => {
        const endpoint = templateData.saveTemplateTo
        if (!endpoint || !token) return

        const html = document.querySelector('.ql-editor').innerHTML
        const text = document.querySelector('.ql-editor').innerText
        if (!html || !text || !subject) return

        const template = {
            ...templateData.template,
            body: { html, text },
            subject,
            name
        }
        try {
            await setEmailTemplate(endpoint, token, template)
            window.location.href = document.referrer
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <Button
            className='mt-5'
            disabled={handleDisableButton()}
            color='success'
            fullwidth
            onClick={handleClick}
        >
            Finish & Save
        </Button>
    );
};

export default SaveButton;
