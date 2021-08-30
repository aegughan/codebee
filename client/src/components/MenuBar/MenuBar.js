import React from 'react'
import { AppContext } from '../../context/AppContext'
import './MenuBar.css'

export default function MenuBar({setEditorProperties}) {
    const editorProperties = React.useContext(AppContext)
    const onSelectChange = (event) => {
        setEditorProperties((prevState) => {return {
            ...prevState,
            [event.target.name]: event.target.value
        }})
    }
    return (
        <div className="menubar">
            <div>
                <select onChange={onSelectChange} name="selectedLanguage" className="pad5" value={editorProperties.selectedLanguage}>
                    <option value="html">HTML</option>
                    <option value="javascript">JavaScript</option>
                </select>
            </div>
            <div>
                <button className="btn" onClick={editorProperties.onExecuteCode}>Run</button>
            </div>
            <div>
                <select onChange={onSelectChange} name="fontSize" className="pad5" value={editorProperties.fontSize}>
                    <option value="12">12 px</option>
                    <option value="14">14 px</option>
                    <option value="16">16 px</option>
                    <option value="18">18 px</option>
                    <option value="20">20 px</option>
                    <option value="22">22 px</option>
                    <option value="24">24 px</option>
                    <option value="26">26 px</option>
                    <option value="28">28 px</option>
                    <option value="30">30 px</option>
                </select>
            </div>
        </div>
    )
}
