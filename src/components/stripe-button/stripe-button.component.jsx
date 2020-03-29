import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const publishableKey = 'pk_test_Y9217pmrd0iE5bGh9aX04T2K00GbuHfxyr';

	const onToken = (token) => {
		alert('Zapłacono!');
	};

	return (
		<StripeCheckout
			label="Zapłać teraz"
			name="Pizzeria Chilli"
			billingAddress
			shippingAddress
			description={`Kwota do zapłaty to ${price} zł`}
			amount={price * 100}
			token={onToken}
			stripeKey={publishableKey}
			currency="PL"
			locale="pl"
			panelLabel="Zapłać teraz zł"
		/>
	);
};

export default StripeCheckoutButton;
