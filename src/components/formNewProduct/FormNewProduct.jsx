import React from 'react'

const FormNewProduct = ({ setNewProductOpen }) => {
	return (
		<div className='row'>
			<form className='col s12'>
				<div className='row'>
					<div className='input-field col s12'>
						<input placeholder='Title' type='text' className='validate' />
						<input placeholder='Description' type='text' className='validate' />
						<input placeholder='Price' type='number' className='validate' />
						<div className='file-field input-field'>
							<div className='btn'>
								<span>PHOTO</span>
								<input type='file' multiple />
							</div>
							<div className='file-path-wrapper'>
								<input
									className='file-path validate'
									type='text'
									placeholder='Upload one or more files'
								/>
							</div>
						</div>
						<button onClick={() => setNewProductOpen(false)} className='btn'>
							Add New Product
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default FormNewProduct
