import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CheckoutForm } from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const { id } = useParams();
    const payData = useLoaderData();
    // console.log(payData);
    const payInfo = {
        available_seats: payData?.available_seats, class_image: payData?.class_image, class_name: payData.class_name, email: payData.email, instructor_email: payData.instructor_email, instructor_name: payData.instructor_name, price: payData.price,
        user_addedclass: payData.user_addedclass,
        _id: payData._id

    }
    // console.log(payInfo);
    return (
        <div>
            <p>Payment : </p>
            <Elements stripe={stripePromise}>
                <CheckoutForm payInfo={payInfo} />
            </Elements>

        </div>
    );
};

export default Payment;