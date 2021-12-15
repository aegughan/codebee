import React, { useState } from 'react'
import './Sudoku.css'

const Sudoku = () => {
	const defaultArr = [0,0,0,0,0,0,0,0]
	const [sudokuVal, setSudokuVal] = useState([defaultArr, defaultArr, defaultArr, defaultArr, defaultArr, defaultArr, defaultArr, defaultArr])
	console.log('sudokuVal', sudokuVal)
	const onChangeHandler = (idx1, idx2, value) => {
		console.log(idx1, idx2, value)
		const sudokuValCopy = sudokuVal
		sudokuValCopy[idx1][idx2] = value
		setSudokuVal(sudokuValCopy)
	}
	return (
		<>
		{
			sudokuVal.map((valArr, idx) => {
				return (
					<div>
						{valArr.map((val, idx1) => {
								return <input value={val} onChange={(event) => onChangeHandler(idx, idx1, event.target.value)}/>
							})
						}
					</div>
				)
			})
		}
		</>
	)
	}

export default Sudoku