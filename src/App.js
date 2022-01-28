import React, { useState } from 'react';
import './App.js'

import Editor from './components/Editor';
import Header from './components/Header';

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState()

  return (
    <div className="App">
      <Header />
      <Editor />
    </div >
  )
}
export default App;