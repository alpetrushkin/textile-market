const Header = ({ isAuthVisible, setIsAuthVisible }) => {
	return (
		<nav style={{ padding: '0 20px' }}>
			<div className='nav-wrapper'>
				<a href='#' className='brand-logo'>
					Logo
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='#'>
							<i
								onClick={() => setIsAuthVisible(!isAuthVisible)}
								className='material-icons'
							>
								account_box
							</i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
