import React from 'react';
import { connect } from 'react-redux';

import './collectionpage.scss';
import { selectCollectionMap } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/CollectionItem';

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollectionMap(ownProps.match.params.collectionId)(state)
});

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'> { title } </h2>
			<div className='items'>
				{ items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(CollectionPage);