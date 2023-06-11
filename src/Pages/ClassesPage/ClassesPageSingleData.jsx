import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useCart from '../../Hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';

// import Swal from 'sweetalert2'
const ClassesPageSingleData = ({ singleData }) => {
    const { user } = useContext(AuthContext);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);





    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { class_name,
        class_image,
        instructor_name,
        instructor_email,
        available_seats,
        price,
        status } = singleData || {};

    const handleBooking = (selectClass) => {
        setIsButtonDisabled(true);
        const bookedClass = {
            class_name,
            class_image,
            instructor_name,
            instructor_email,
            email: user?.email,
            available_seats,
            price,
            status,
            user_addedclass: 1,
        }
        if (user) {
            fetch('http://localhost:5000/bookingClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedClass)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                    if (data.insertedId) {
                        refetch();
                        toast('Successfully added class');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            navigate('/login');
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Course Name : {class_name}</h2>
                <p> Available Seats : {available_seats}</p>
                <p> Instructor_Name : {instructor_name}</p>
                <p> Instructor_Email : {instructor_email}</p>
                <p> Price : ${price}</p>




                <div className="card-actions">
                    <button onClick={() => handleBooking(singleData)} disabled={isButtonDisabled} className="btn btn-primary">Booking Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageSingleData;