import React from 'react';

import Editor from './components/Editor';
import EmailTemplatesHelp from './components/EmailTemplatesHelp';
import ToggleHelpButton from './components/EmailTemplatesHelp/ToggleHelpButton';
import Header from './components/Header';
import EditorProvider from './components/Provider/';
import SaveButton from './components/SaveButton';

const App = () => {

  return (
    <>
      <Header />
      <EditorProvider>
        <div className='p-5 mt-5 has-text-left'>
          <ToggleHelpButton />
          <EmailTemplatesHelp />
          <Editor />
          <SaveButton />
        </div>
      </EditorProvider>
    </>
  )
}
export default App;