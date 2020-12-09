import React from 'react';
import { ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg';
import './carticon.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';

const CartIcon = ({ toggleCart, itemCount }) => (
	<div className='cart-icon' onClick={ toggleCart }>
		<ShopIcon className='shop-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);