import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
// import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';

const mapStateToProps = state => ({
	currentUser: state.userReducer.currentUser
});

const Header = ({ currentUser }) => (
		<div className='header'>
			<Link	className='logo-container' to='/'>
				<img className='logo' src={logo} alt="test" width='70px' height='70px' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>SHOP</Link>
				<Link className='option' to='/shop'>CONTACT</Link>
				{
					currentUser ? (
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT 
						</div>
					) : (
						<Link className='option' to='/signin'> SIGN IN </Link>
					)
				}
			</div>	
		</div>
	)

export default connect(mapStateToProps)(Header); 



// <Logo className='logo' />