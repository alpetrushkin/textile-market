import React from 'react'

const AddProduct = ({ setNewProductOpen }) => {
	return (
		<button
			onClick={() => setNewProductOpen(true)}
			className='btn'
			style={{ margin: '10px' }}
		>
			+ new product
		</button>
	)
}

export default AddProduct
