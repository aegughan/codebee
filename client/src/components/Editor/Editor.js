import React from 'react'
import Code from '../Code/Code'
import HTMLEditor from './HTMLEditor/HTMLEditor'
import './Editor.css'
import { EditorContext } from '../../context/EditorContext'
import { AppContext } from '../../context/AppContext'
import JSEditor from './JSEditor/JSEditor'
import getData from '../../api/api'

export default function Editor({setEditorProperties}) {
    const [editorValue, setEditorValue] = React.useState('')
    const [editorValueCopy, setEditorValueCopy] = React.useState('')
    const [terminalData, setTerminalData] = React.useState({})
    const editorProperties = React.useContext(AppContext)
    console.log('editorProperties', editorProperties)
    
    React.useEffect(() => {
        const onExecuteCode = async () => {
            setEditorValueCopy(editorValue)
            if (editorProperties.selectedLanguage !== 'html') {
                const response = await fetch('/api/execute', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ language: 'JavaScript', code: editorValue  }),
                });
                const respData = await response.json();
                setTerminalData(respData)
                console.log('respData', respData)
            }

        }
        setEditorProperties((prevState) => {return {...prevState, onExecuteCode }})
    }, [setEditorProperties, editorValue])

    return (
        <EditorContext.Provider value={editorValue}>
            <div id="Editor">
                <div id="codeEditor">
                    <Code setEditorValue={setEditorValue}/>
                </div>
                <div id="currentEditor">
                {
                    editorProperties.selectedLanguage === 'html' && <HTMLEditor editorValue={editorValueCopy}/>
                }
                {
                    editorProperties.selectedLanguage === 'javascript' && <JSEditor terminalData={terminalData}/>
                }
                </div>
            </div>
        </EditorContext.Provider>
    )
}
