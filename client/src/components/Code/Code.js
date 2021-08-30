import React from 'react'
// import { EditorContext } from '../../context/EditorContext';
import './Code.css'
import AceEditor from "react-ace";
import { AppContext } from '../../context/AppContext';

export default function Code({setEditorValue}) {
    const onCodeChange = (codeVal) => {
        setEditorValue(codeVal)
    }
    const editorProperties = React.useContext(AppContext);
    return (
        <div id="codeData">
        <AceEditor
            mode={editorProperties.selectedLanguage}
            theme="github"
            onChange={onCodeChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            className="aceEditor"
            style={{fontSize: `${editorProperties.fontSize}px`}}
        />
        </div>
    )
}
