import React from 'react';

const SingleClassData = ({ singleData }) => {
    const { class_name,
        class_image,
        instructor_name,
        instructor_email,
        available_seats,
        price,
        status } = singleData || {};

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Course Name : {class_name}</h2>
                <p> Available Seats : {available_seats}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Booking Seat</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassData;