import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddAClass = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (addclass) => {
        fetch("http://localhost:5000/allClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addclass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Class Added Successfully  ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };
    return (
        <div className='bg-gray-200 text-center mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg '>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    className='p-2 m-2 rounded'
                    type='text'
                    {...register("class_name", { required: true })}
                    placeholder='Class Name'
                    defaultValue=""

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("class_image", { required: true })}
                    placeholder='Class Image Url'
                    defaultValue={user?.photoUrl}

                />
                <br />
                <input
                    className='p-2 m-2 rounded'
                    type='text'
                    {...register("instructor_name")}
                    placeholder='Instructor Name'
                    defaultValue={user?.displayName}
                    readOnly

                />
                <input
                    className='p-2 m-2 rounded'
                    type='email'
                    {...register("instructor_email")}
                    placeholder='Instructor Email'
                    defaultValue={user?.email}
                    readOnly

                />
                <br />


                <input
                    className='p-2 m-2 rounded'
                    type='number'
                    {...register("available_seats", { required: true })}
                    placeholder='Available Seats'
                    defaultValue=""

                />
                <input
                    className='p-2 m-2 rounded'
                    type='number'

                    {...register("price", { required: true })}
                    placeholder='Price'
                    defaultValue=""

                />
                <br />
                <input
                    className='p-2 m-2 rounded'

                    {...register("status", { required: true })}
                    placeholder='Status'
                    defaultValue="pending"

                />

                <br />
                <input className="btn btn-success btn-tiny btn-xs sm:btn-sm md:btn-md lg:btn-md" value="Add A Class" type="submit" />
            </form>

        </div>
    );
};

export default AddAClass;