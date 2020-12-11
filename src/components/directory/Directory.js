import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import { selectDirSections } from '../../redux/directory/dir-selector';

import './directory.scss';

const mapStateToProps = createStructuredSelector({
  sections: selectDirSections
});

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);


export default connect(mapStateToProps)(Directory);

// In case the images are inside the public folder, replace lines 19 and 20 with below:

// sections.map(({id, imageUrl, ...otherSectionProps})) =>
// <MenuItem key={id}  src={process.env.PUBLIC_URL + imageUrl} {...otherSectionProps} />

// In the MenuItem.js, change 'imageUrl' with 'src' in applicable lines of code.

// constructor() {
//     super();
//     this.state = {
//         sections: SECTIONS_DATA
//     }
//   }