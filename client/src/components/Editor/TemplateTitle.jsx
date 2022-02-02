import React, { useContext } from 'react';
import { Form } from 'react-bulma-components'
import { EditorContext } from '../Provider';

const TemplateTitle = () => {
    const { titleState, setTitleState } = useContext(EditorContext)

    const handleTitleChange = ({ target: { value } }) => setTitleState(value)

    return (
        <>
            <Form.Label textColor='white'>Title</Form.Label>
            <Form.Control >
                <Form.Input id='subject' value={titleState} onChange={handleTitleChange} />
            </Form.Control>
        </>
    );
};

export default TemplateTitle;
