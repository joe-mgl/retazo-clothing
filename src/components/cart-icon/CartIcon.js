import React from 'react';
import { ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg';
import './carticon.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartIcon = ({ toggleCart }) => (
	<div className='cart-icon' onClick={ toggleCart }>
		<ShopIcon className='shop-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);