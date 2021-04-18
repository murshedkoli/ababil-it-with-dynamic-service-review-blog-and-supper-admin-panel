import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51IhJHFBCqx8TtkMFCjxIf2NTDbMH7jIM1L5BJVoDljOzjljm6vicbk0NtasxIRBFMMWGgG27NEuoiMUdw8h0VwI900MDagR4eb');

const PaymentProcess = ({handlePayment}) => {
    return (
        <div className="m-3 p-5 bg-light">
            <Elements stripe={stripePromise}>
            <CheckoutForm handlePayment={handlePayment}/>

        </Elements>
        </div>
    );
};

export default PaymentProcess;