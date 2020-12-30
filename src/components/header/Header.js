import React from 'react';
// import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyled';

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
		<HeaderContainer>
			<LogoContainer to='/'>
				<img className='logo' src={logo} alt="test" width='70px' height='70px' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/shop'>CONTACT</OptionLink>
				{
					currentUser ? (
						<OptionLink as='div' onClick={() => auth.signOut()}>
							SIGN OUT 
						</OptionLink>
					) : (
						<OptionLink to='/signin'> SIGN IN </OptionLink>
					)
				}
				<CartIcon />
			</OptionsContainer>	
			{
				hidden ? null : <CartDropdown />
			}
		</HeaderContainer>
	)

export default connect(mapStateToProps)(Header); 



// <Logo className='logo' />