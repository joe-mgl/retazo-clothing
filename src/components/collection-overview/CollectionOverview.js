import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop-selector';

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview
});

const CollectionOverview = ({ collections }) => (
	<div className='collections-overview'>
		{
			collections.map(({ id, ...otherCollectionProps}) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))
		}
	</div>
)

export default connect(mapStateToProps)(CollectionOverview);