

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

export const CheckoutForm = ({ payInfo }) => {
    const { user } = useContext(AuthContext);

    const [clientSecret, setClientSecret] = useState('')

    // console.log(payInfo);
    const stripe = useStripe();
    const elements = useElements();
    // const price = payInfo['price'];


    // const { price } = payData.payData;
    // console.log(price);


    useEffect(() => {
        // console.log(payData?.price);
        if (payInfo?.price)
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price: payInfo?.price })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret)
                })
    }, [payInfo])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();



        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'annonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('[error]', confirmError);
        } else {
            console.log('[paymentIntent]', paymentIntent);
            if (paymentIntent.status === 'succeeded') {

                // save pay to db 
                const paymentInformation = {
                    ...payInfo,
                    transactionId: paymentIntent.id,
                }
                console.log(paymentInformation);
                fetch('http://localhost:5000/payment/transaction', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(paymentInformation)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire(
                                'payment Successfull',
                                'You Successfull Enrolled Course .',
                                'success'
                            )
                        }

                    })

            }
        }
    };



    return (


        <form className=' w-96' onSubmit={handleSubmit}>
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
            <button className='btn btn-primary btn-sm mt-2' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>





    );
};
