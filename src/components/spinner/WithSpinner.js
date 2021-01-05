import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './SpinnerStyled';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherProps} />
	)
}

export default WithSpinner;