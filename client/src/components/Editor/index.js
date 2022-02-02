import React, { useContext } from 'react';
import { Form } from 'react-bulma-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { EditorContext } from '../Provider';
import './style.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', "color", "background",
    'list', 'bullet',
    'align',
    'link', 'image'
]

const Editor = () => {
    const {
        bodyEditorState: { text: bodyText },
        handleBodyChange,
        subjectEditorState: { text: subjectText },
        handleSubjectChange
    } = useContext(EditorContext)

    return (
        <>
            <Form.Field>
                <Form.Label textColor='white'>Subject</Form.Label>
                <Form.Control >
                    <Form.Input id='subject' value={subjectText} onChange={handleSubjectChange} />
                </Form.Control>
                <Form.Label textColor='white' >Body</Form.Label>
                <Form.Control>
                    <div id="editor">
                        <ReactQuill
                            modules={modules}
                            formats={formats}
                            value={bodyText}
                            onChange={handleBodyChange}
                        />
                    </div>
                </Form.Control>
            </Form.Field>
        </>
    );
}

export default Editor;