import React from 'react';

const ClassesPageSingleData = ({ singleData }) => {
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
                <p> Instructor_Name : {instructor_name}</p>
                <p> Instructor_Email : {instructor_email}</p>
                <p> Price : ${price}</p>


                <div className="card-actions">
                    <button className="btn btn-primary">Booking Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageSingleData;