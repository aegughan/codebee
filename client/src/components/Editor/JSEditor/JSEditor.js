import React from 'react'
import './JSEditor.css'

export default function JSEditor({terminalData}) {
    console.log(terminalData, 'terminalData')
    return (
        <textarea id="JSTerminal" value={terminalData.output || ''}>
        </textarea>
    )
}
