import './App.css';
import React from 'react';
import Editor from './components/Editor/Editor';
import MenuBar from './components/MenuBar/MenuBar';
import { AppContext } from './context/AppContext';

function App() {
  const [editorProperties, setEditorProperties] = React.useState({
    selectedLanguage: 'html',
    fontSize: '12',
    onExecuteCode: () => {},
  })
  return (
    <div> 
      <AppContext.Provider value={editorProperties}>
        <MenuBar setEditorProperties={setEditorProperties}/>
        <Editor setEditorProperties={setEditorProperties}/>
      </AppContext.Provider>
     </div>
  );
}

export default App;
