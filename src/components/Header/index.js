import React from 'react';
import reactLogo from './react.svg';
import quillLogo from './quill.jpeg'
import './style.css'

const Header = () => (
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
);


export default Header;
