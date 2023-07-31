import React, { useState } from 'react'
import { TextileBody } from '../../interfaces/Textile'

const CardItem = ({ name, description, price, image, onRemove, onChange }) => {
	const [show, setShow] = useState(true)
	const [newName, setNewName] = useState('')

	const handleBlur = () => {
		const data: TextileBody = {
			name: newName
		}
		onChange(data)
		setShow(true)
		setNewName('')
	}

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			onChange(newName)
			setShow(true)
			setNewName('')
		}
	}

	return (
		<div style={{ minWidth: '250px' }} className='card'>
			<div className='card-image'>
				<img
					style={{ position: 'relative' }}
					src={
						image !== null ? `https://placehold.co/600x400?text=${name}` : image
					}
					alt={name}
				/>
				<i
					onClick={onRemove}
					style={{
						position: 'absolute',
						top: '10px',
						right: '10px',
						cursor: 'pointer'
					}}
					className='material-icons'
				>
					delete
				</i>
			</div>
			<div className='card-content'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						cursor: 'pointer'
					}}
				>
					{show ? (
						<h4>{name}</h4>
					) : (
						<div className='input-field col s6'>
							<input
								onKeyDown={handleKeyDown}
								onBlur={handleBlur}
								onChange={event => setNewName(event.currentTarget.value)}
								value={newName}
								placeholder='New title'
								id='input_text'
								type='text'
								data-length='10'
							/>
						</div>
					)}
					<i className='material-icons' onClick={() => setShow(!show)}>
						create
					</i>
				</div>
				<p>{description}</p>
				<span>{price} руб.</span>
			</div>
		</div>
	)
}

export default CardItem
