import React, { Component } from 'react';
import { sections } from './dir-data';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';


class Directory extends Component {
	render() {
		return (
			<div className='directory-menu'>
				{
					sections.map(({ id, ...otherSectionProps}) =>
						<MenuItem key={id} {...otherSectionProps} />
					)
				}
			</div>
		)
	}
}

export default Directory;