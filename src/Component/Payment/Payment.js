import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51IhJHFBCqx8TtkMFCjxIf2NTDbMH7jIM1L5BJVoDljOzjljm6vicbk0NtasxIRBFMMWGgG27NEuoiMUdw8h0VwI900MDagR4eb');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>

            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />


        </Elements>
    );
};

export default Payment;