import React, { useContext } from 'react';
import { Form } from 'react-bulma-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { EditorContext } from '../Provider';
import { formats, modules } from './config';
import './style.css'
import Subject from './Subject';
import TemplateTitle from './TemplateTitle';

const Editor = () => {
    const { bodyState: { text }, setBodyState, } = useContext(EditorContext)
    const handleBodyChange = (value) => setBodyState({ text: value })

    return (
        <>
            <Form.Field>
                <hr />
                <TemplateTitle />
                <hr />
                <Subject />

                <Form.Label textColor='white' >Body</Form.Label>
                <Form.Control>
                    <div id="editor">
                        <ReactQuill
                            modules={modules}
                            formats={formats}
                            value={text}
                            onChange={handleBodyChange}
                        />
                    </div>
                </Form.Control>
            </Form.Field>
        </>
    );
}

export default Editor;