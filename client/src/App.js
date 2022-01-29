import React, { useState } from 'react';
import './App.js'

import Editor from './components/Editor';
import Header from './components/Header';
import EditorProvider from './components/Provider/index.js';

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState()

  return (
    <>
      <Header />
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </>
  )
}
export default App;