import React from 'react';
import { Container } from 'react-bulma-components';
import BackButton from './components/BackButton';

import Editor from './components/Editor';
import EmailTemplatesHelp from './components/EmailTemplatesHelp';
import ToggleHelpButton from './components/EmailTemplatesHelp/ToggleHelpButton';
import Header from './components/Header';
import EditorProvider from './components/Provider/';
import SaveButton from './components/SaveButton';

const App = () => {

  return (
    <>
      <BackButton />
      <Header />
      <EditorProvider>
        <Container className='p-5 mt-5 has-text-left'>
          <ToggleHelpButton />
          <EmailTemplatesHelp />
          <Editor />
          <SaveButton />
        </Container>
      </EditorProvider>
    </>
  )
}
export default App;