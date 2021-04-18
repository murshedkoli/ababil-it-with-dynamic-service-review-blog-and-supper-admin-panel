import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import swal from 'sweetalert';


const CheckoutForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setpaymentError] = useState(null)

    const [paymentSuccess, setpaymentSuccess] = useState(null)
    

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setpaymentError(error.message)
            setpaymentSuccess(null);

        } else {
            setpaymentSuccess('Payment Success');
            setpaymentError(null)
            handlePayment(paymentMethod.id);
            swal("Payment Done!", "Your Order Placed Succefully!", "success");

        }
    };

    return (
        <div>
            {
                paymentError&& <p style={{color:'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color:'green'}}>{paymentSuccess}</p>
            }
            <form onSubmit={handleSubmit}>
                <div style={{border:'1px solid black', padding:'10px', marginBottom:'5px'}}>
                <CardElement />
                </div>
                <button className="btn btn-success btn-block"  type="submit" disabled={!stripe}>
                    Payment
             </button>
            </form>
        </div>
    );
};


export default CheckoutForm;