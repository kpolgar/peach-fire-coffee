import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/peach.png';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_XlXHGLOsA96R20cDOrBKAteS00yED14F7q';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Peach Fire Clothing Ltd.'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;