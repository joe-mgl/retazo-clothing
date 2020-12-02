import React from 'react';
import './collectionpreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='main-collection'>
			<h1 className='title'>{title.toUpperCase()}</h1>
     	<div className='preview'>
     		{items
     			.filter((item, i) => i < 4)
     			.map((item) => (
     					<CollectionItem key={item.id} item={item} />
     			))
     		}
     	</div>
    </div>
	)
}

export default CollectionPreview;