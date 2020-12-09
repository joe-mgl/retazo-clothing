import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions';

import './checkoutitem.scss';

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	itemAdd: item => dispatch(addItem(item)),
	itemRemove: item => dispatch(removeItem(item))
});

const CheckoutItem = ({ cartItem, clearItem, itemAdd, itemRemove }) => {
	const {name, imageUrl, price, quantity } = cartItem;
	return(
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow'
					 onClick={ () => itemRemove(cartItem) }>&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow'
					 onClick={ () => itemAdd(cartItem) }>&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' 
				 onClick={ () => clearItem(cartItem) }>&#10005;
			</div>
		</div>
	);
};

export default connect(null,mapDispatchToProps)(CheckoutItem);