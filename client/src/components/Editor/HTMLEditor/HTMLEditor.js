import React from 'react'
// import { EditorContext } from '../../../context/EditorContext';
import './HTMLEditor.css'

export default function HTMLEditor({editorValue}) {
    // const EditorContextData = React.useContext(EditorContext);
    return (
        <div>
            <iframe srcDoc={editorValue} id="HTMLIframe" title="Code"></iframe>
        </div>
    )
}
