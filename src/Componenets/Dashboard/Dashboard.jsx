import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHackerNews, FaHistory, FaHome, FaUser } from 'react-icons/fa';
import { FcPaid, } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import userCart from '../../Hooks/userCart';
import useTitle from '../../Hooks/useTitle';



const Dashboard = () => {
    const [role, setRole] = useState('');
    const { user } = useContext(AuthContext);
    const [data, refetch] = userCart();
    useTitle('DashBoard');


    useEffect(() => {

        if (data) {
            const roleActivity = data.filter(userRole => userRole.email == user?.email);
            if (roleActivity) {
                const confrimRole = roleActivity[0].role;
                setRole(confrimRole);

            }
        }
    }, [data])


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                    {
                        // AdminDashboard 
                        role == 'admin' ? <>
                            <h3 className='text-xl font-semibold text-sky-500'>Admin DashBoard </h3>
                            <div className="divider"></div>
                            <><li>
                                <NavLink to='/dashboard/manageClasses'>
                                    <FaHackerNews></FaHackerNews> Manage Classes</NavLink>
                            </li>
                                <li><NavLink to='/dashboard/manageusers'><FaUser /> Manage Users</NavLink></li></>

                        </>
                            :
                            // instructor dashboard
                            role == 'instructor' ? <><li>
                                <h3 className='text-xl font-semibold text-sky-500'>Instructor DashBoard</h3>
                                <div className="divider"></div>
                                <NavLink to='/dashboard/addaclass'>
                                    <FaHackerNews></FaHackerNews> Add a Class</NavLink>
                            </li>
                                <li><NavLink to='/dashboard/myclasses'><FcPaid /> My Classes</NavLink></li></>


                                :
                                // Student dashboard 

                                <><li>
                                    <h3 className='text-xl font-semibold text-sky-500'>Student DashBoard</h3>
                                    <div className="divider"></div>
                                    <NavLink to='/dashboard/myselectedclass'>
                                        <FaHackerNews></FaHackerNews> My Selected Class</NavLink>
                                </li>
                                    <li><NavLink to='/dashboard/myenrolledclasses'><FcPaid /> My Enrolled Class</NavLink></li>
                                    <li><NavLink to='/dashboard/paymenthistory'><FaHistory /> My Payment</NavLink></li></>
                    }


                    <div className="divider"></div>
                    <li>


                        <NavLink className='mr-3' to="/"> <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='mr-3' to="/instructorspage"><GiTeacher />  Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink className='mr-3' to="/classespage"><SiGoogleclassroom /> Classes</NavLink>
                    </li>
                </ul>







            </div>
        </div>
    );
};

export default Dashboard;