import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../../assets/logo.png';

const onToken = token => {
	console.log(token);
	alert('Payment successful');
}

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51Hz0YSEwwIu4WFSXK3u3hTwDQKcEcb6QQl54dQMx0cT5uLA1oas3Cice9yIpjZs23CHhua9q9I7JCB3GGi7sx4mK00k4ssxFSj'
	return(
		<StripeCheckout
			label = 'Pay Now'
			name = 'Retazo Clothing CA'
			billingAddress
			shippingAddress
			image={logo}
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;