import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import useTitle from '../Hooks/useTitle';



const Login = () => {
    const auth = getAuth(app);
    // const navlink = useNavigate();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                const userinfo = { name: user.displayName, email: user.email };
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
                            navigate(from, { replace: true });
                            toast('successfully created user');

                        }

                    })



            })
            .catch(error => {
                console.log(error.message);
            })
    }
    useTitle('Login')
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [loginError, setLoginError] = useState('');

    const { signIn } = useContext(AuthContext);

    const onSubmit = data => {
        setLoginError('');

        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast('successfully Login');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);

            })
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>

                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

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


                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-600">
                                        <Link to="/registration">Register</Link>
                                    </span>
                                </p>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign In" />
                                </div>
                            </form>
                            <p className='text-red-500'>{loginError}</p>
                        </div>
                    </div>
                </div>

                {/* login with google and github */}
                <div className='text-center mb-5'>
                    <h2 className='text-xl font-medium mb-3'>Login with :</h2>
                    <button onClick={handleGoogleSignIn} className="btn-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-3"><FcGoogle className='me-3'></FcGoogle>  Sign in Google</button>
                    <br />


                </div>
            </section >


        </>
    );
};

export default Login;