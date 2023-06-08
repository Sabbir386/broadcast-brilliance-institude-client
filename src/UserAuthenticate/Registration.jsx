import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('Registration')
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const onSubmit = data => {

        const { email, password, photoURL, name } = data;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('');

                updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photoURL

                })
                    .then(() => {
                        const userinfo = { name, email };
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },

                            body: JSON.stringify(userinfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast('successfully created user');

                                }

                            })
                        setError('');
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                        return;
                    })


            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    return (
        <div className='my-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <section className=" dark:bg-gray-900 mt-5">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-12 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Create an Account
                            </h1>

                            <div className='bg-gray-200 text-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg'>

                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                        })} placeholder="password" className="input input-bordered" />
                                        {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}

                                        {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one Uppercase letter,and One Special character.</p>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"  {...register("confirmPassword", {
                                            required: true,
                                            // validate: (value) => value === password.current || 'The passwords do not match',

                                        })} placeholder="Confirm Password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p>If you Already have an account? Go to <small className='text-normal font-bold'> <Link to="/login">Login</Link></small></p>

                            </div>

                            <p className='text-red-500'>{error}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;