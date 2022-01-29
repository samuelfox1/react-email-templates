import React, { useContext } from 'react';
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
    const { editorState: { text }, handleChange } = useContext(EditorContext)

    return (
        <div id="editor">
            <ReactQuill
                modules={modules}
                formats={formats}
                value={text}
                onChange={handleChange}
            />
        </div>
    );
}

export default Editor;