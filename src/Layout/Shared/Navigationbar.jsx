import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.ico'
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>




            <div className=" rounded navbar bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='mr-3' to="/">Home</Link>
                            <Link className='mr-3' to="/instructors">Instructors</Link>
                            <Link className='mr-3' to="/classes">Classes</Link>
                            <Link className='mr-3' to="/dashboard">Dashboard</Link>


                        </ul>
                    </div>


                    <div>
                        <img className='rounded-lg ' src={logo} alt="" />
                        {/* <a className="btn btn-ghost normal-case text-xl">BroadCast Brilliance Institude</a> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <Link className='mr-3' to="/">Home</Link>
                    <Link className='mr-3' to="/instructors">Instructors</Link>
                    <Link className='mr-3' to="/classes">Classes</Link>

                    {
                        user ? <Link className='mr-3' to="/dashboard">Dashboard</Link> : ''
                    }


                </div>
                <div className="navbar-end">
                    {
                        user ? <>

                            <div>
                                <button onClick={handleLogOut} className='mr-3 font-medium'>LogOut</button>
                            </div>
                            <div className="relative group">
                                <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="Avatar" />

                            </div>

                        </>
                            : <Link className='text-xl font-medium' to="/login">Login</Link>
                    }

                </div >
            </div >


        </>
    );
};

export default Navigationbar;