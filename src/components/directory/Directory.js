import React, { Component } from 'react';
import { SECTIONS_DATA } from './sections.data';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';


class Directory extends Component {
  constructor() {
    super();
    this.state = {
        sections: SECTIONS_DATA
    }
  }
  render() {
    const { sections } = this.state;
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

// In case the images are inside the public folder, replace lines 19 and 20 with below:

// sections.map(({id, imageUrl, ...otherSectionProps})) =>
// <MenuItem key={id}  src={process.env.PUBLIC_URL + imageUrl} {...otherSectionProps} />

// In the MenuItem.js, change 'imageUrl' with 'src' in applicable lines of code.