import React from 'react'
import logo from '../logo.svg'


export default function Header() {
	return (
		<nav>
			<img src={logo} alt="logo" className="nav--icon" />
			<ul className='nav-items'>
				<li className='nav--title'>Pricing</li>
				<li className='nav--title'>About</li>
				<li className='nav--title'>Contact</li>
			</ul>
		</nav>
	)
}

