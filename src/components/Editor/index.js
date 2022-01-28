import React, { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import data from './data.json'
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
    const [state, setState] = useState({ text: data.html })

    const handleChange = (value) => {
        const html = document.querySelector('.ql-editor').innerHTML
        const text = document.querySelector('.ql-editor').innerText
        console.log({ html, text })
        setState({ text: value })
    }
    return (
        <div id="editor">
            <ReactQuill
                modules={modules}
                formats={formats}
                value={state.text}
                onChange={handleChange}
            />
        </div>
    );
}

export default Editor;