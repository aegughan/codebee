import './App.css';
import React from 'react';
import Editor from './components/Editor/Editor';
import MenuBar from './components/MenuBar/MenuBar';
import AppMenu from './components/AppMenu/AppMenu';
import { AppContext } from './context/AppContext';
import Sudoku from './components/Sudoku/Sudoku';

function App() {
  const [editorProperties, setEditorProperties] = React.useState({
    selectedLanguage: 'html',
    fontSize: '12',
    onExecuteCode: () => {},
    selectedAppMenu: 'Code Play'
  })
  return (
    <div> 
      <AppContext.Provider value={editorProperties}>
        <AppMenu setEditorProperties={setEditorProperties}/> 
        {editorProperties.selectedAppMenu === 'Code Play' && 
        <>
          <MenuBar setEditorProperties={setEditorProperties}/>
          <Editor setEditorProperties={setEditorProperties}/>
        </>
        }
        {editorProperties.selectedAppMenu === 'Sudoku' &&
        <Sudoku />
        }
      </AppContext.Provider>
     </div>
  );
}

export default App;
