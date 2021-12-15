import React from 'react'
import './AppMenu.css'
import { AppContext } from '../../context/AppContext'

const AppMenu = ({setEditorProperties}) => {
	const editorProperties = React.useContext(AppContext)
	const onMenuChange = (menuName) => {
		setEditorProperties((prevState) => {return {
				...prevState,
				selectedAppMenu: menuName
		}})
}
const {selectedAppMenu} = editorProperties
	return (
		<div className="AppMenu">
			<div className={`subMenu ${selectedAppMenu === 'Code Play' ? 'active' : ''}`} onClick={() => onMenuChange('Code Play')}>Code Play</div>
			<div className={`subMenu ${selectedAppMenu === 'Sudoku' ? 'active' : ''}`} onClick={() => onMenuChange('Sudoku')}>Sudoku</div>
			<div className={`subMenu ${selectedAppMenu === 'Chess' ? 'active' : ''}`} onClick={() => onMenuChange('Chess')}>Chess</div>
		</div>
	)
}

export default AppMenu