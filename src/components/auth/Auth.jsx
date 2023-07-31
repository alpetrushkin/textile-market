import React from 'react'

const Auth = ({ isAuthVisible, setIsAuthVisible }) => {
	return (
		isAuthVisible && (
			<div className='row'>
				<form className='col s12'>
					<div className='row'>
						<div className='input-field col s6'>
							<i className='material-icons prefix'>account_circle</i>
							<input
								placeholder='First Name'
								id='first_name'
								type='text'
								className='validate'
							/>
						</div>
						<div className='input-field col s6'>
							<i className='material-icons prefix'>account_circle</i>
							<input
								id='last_name'
								type='text'
								className='validate'
								placeholder='Last Name'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>fingerprint</i>
							<input
								id='password'
								type='password'
								className='validate'
								placeholder='Password'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>mail</i>
							<input
								id='email'
								type='email'
								className='validate'
								placeholder='Email'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>phone</i>
							<input
								id='icon_telephone'
								type='tel'
								className='validate'
								placeholder='Phone'
							/>
						</div>
					</div>
					<button onClick={() => setIsAuthVisible(false)} className='btn'>
						Registration
					</button>
				</form>
			</div>
		)
	)
}

export default Auth
