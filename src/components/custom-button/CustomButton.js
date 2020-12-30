import React from 'react';
import { CustomButtonContainer } from './CustomButtonStyled';

// import './custombutton.scss';
// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
// 	<button className=
// 		{`${inverted ? 'inverted' : ''}
// 		${isGoogleSignIn ? 'google-signin' : ''} custom-button `} {...otherProps}
// 	>
// 		{children}
// 	</button>
// );

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>
		{children}
	</CustomButtonContainer>
);

export default CustomButton;