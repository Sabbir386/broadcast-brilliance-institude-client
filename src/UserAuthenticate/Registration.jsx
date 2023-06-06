import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('Registration')

    const handleRegister = event => {
        event.preventDefault();
        const Form = event.target;
        const name = Form.name.value;
        const photo = Form.photo.value;
        const email = Form.email.value;
        const password = Form.password.value;
        // console.log(name, photo, email, password);
        setError('');

        //validate
        if (password.length < 6) {
            setError('Please add at least 6 Character in your password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('');

                updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photo

                })
                    .then(() => {
                        console.log(createdUser);
                        setError('');
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                        return;
                    })
                toast('successfully created user');


            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })



    }

    return (
        <div className='my-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <section className="bg-gray-50 dark:bg-gray-900 mt-5">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an Account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="photo-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                                    <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Photo Url" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input email" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Input Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button className='btn btn-primary p-3'>Register</button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <span className="font-medium text-primary-600 hover:underline dark:text-primary-500"> <Link to="/login">Login here</Link></span>
                                </p>
                            </form>
                            <p className='text-red-500'>{error}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;