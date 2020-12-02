import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
import './collectionitem.scss';

const mapDispatchToProps = (dispatch) => ({
	addToCart: item => dispatch(addItem(item))
})

const CollectionItem = ( { item, addToCart }) => {
	const { name, price, imageUrl } = item;
	return(
		<div className='collection-item'>
			<div className='image'
					 style={{
					 	backgroundImage: `url(${imageUrl})`
					 }}
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={ () => addToCart(item) } inverted>Add to Cart</CustomButton>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(CollectionItem);