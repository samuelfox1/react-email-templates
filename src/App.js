import React from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import reactLogo from './react.svg';
import quillLogo from './quill.jpeg'
import demo from './demo-output.json'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: demo.html } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    const html = document.querySelector('.ql-editor').innerHTML
    const text = document.querySelector('.ql-editor').innerText
    console.log({ html, text })
    this.setState({ text: value })
  }

  modules = {
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

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', "color", "background",
    'list', 'bullet',
    'align',
    'link', 'image'
  ]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logo-wrapper flex-center'>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            ><img src={reactLogo} className="react-logo logo" alt="logo" /></a>
            <p>+</p>
            <a
              href="https://quilljs.com/"
              target="_blank"
              rel="noopener noreferrer"
            ><img src={quillLogo} className="quill-logo logo" alt="logo" /></a>
          </div>
          <p>built for <a href="https://www.tutor-me.io" rel="noreferrer" target="_blank">tutor-me.io</a></p>
        </header >
        <div id="editor">
          <ReactQuill
            modules={this.modules}
            formats={this.formats}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
      </div >
    )
  }
}

export default App;
