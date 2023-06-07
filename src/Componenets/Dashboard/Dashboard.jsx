import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHackerNews, FaHome } from 'react-icons/fa';
import { FcPaid, } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';



const Dashboard = () => {
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
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to={`/dashboard/myselectedclass`}>
                            <FaHackerNews></FaHackerNews> My Selected Class</NavLink>
                    </li>
                    <li><NavLink to={`/dashboard/myenrolledclasses`}><FcPaid /> My Enrolled Class</NavLink></li>
                    <div className="divider"></div>
                    <li>


                        <NavLink className='mr-3' to="/"> <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='mr-3' to="/instructors"><GiTeacher />  Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink className='mr-3' to="/classes"><SiGoogleclassroom /> Classes</NavLink>
                    </li>
                </ul>







            </div>
        </div>
    );
};

export default Dashboard;