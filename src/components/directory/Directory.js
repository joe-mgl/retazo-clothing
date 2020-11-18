import React, { Component } from 'react';
import { sections } from './dir-data';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';


class Directory extends Component {
	render() {
		return (
			<div className='directory-menu'>
				{
					sections.map(({ title, id, imageUrl, size}) =>
						<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
					)
				}
			</div>
		)
	}
}

export default Directory;