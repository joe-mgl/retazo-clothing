import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selector';

import './header.scss';

// import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyled';

// import {ReactComponent as Logo} from '../../assets/crown.svg';


// Not using selectors 
// const mapStateToProps = state => ({
// 	currentUser: state.userReducer.currentUser,
// 	hidden: state.cartReducer.hidden
// });

//Using Selectors

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const Header = ({ currentUser, hidden }) => (
		<div className='header'>
			<Link className='logo-container' to='/'>
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
				<CartIcon />
			</div>	
			{
				hidden ? null : <CartDropdown />
			}
		</div>
	)

export default connect(mapStateToProps)(Header); 



// <Logo className='logo' />