import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const feedbackClassByAdmin = () => {
    // const { data } = useLoaderData();
    // console.log(data);
    const { id } = useParams();
    const dataById = useLoaderData();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const { available_seats, class_image, class_name
            , instructor_email, instructor_name, price, status


        } = dataById[0] || {}
        const modiData = {
            available_seats, class_image, class_name
            , instructor_email, instructor_name, price, status,
            feedback: data?.text
        }
        // console.log(modiData);

        fetch(`https://broadcast-brilliance-institude-server-side.vercel.app/allClasses/updatedFeedBack/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(modiData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' Sent Feedback done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    };

    return (
        <div>
            <p className='text-xl font-semibold mb-5'>Admin  Feedback Field For Instructor Added Class :</p>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="form-control" >
                    <label className="label">
                        <span className="label-text mb-2">FeedBack Box:</span>

                    </label>
                    {/* <input type="textarea"  {...register("text", { required: true })} name="text" placeholder="Text" className="input input-bordered" /> */}
                    <textarea placeholder="Write message Here" className="bg-gray-100" name="" id="" cols="30" rows="10" {...register("text", { required: true })}  ></textarea>

                </div>



                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="FeedBack" />
                </div>
            </form>

        </div>
    );
};

export default feedbackClassByAdmin;