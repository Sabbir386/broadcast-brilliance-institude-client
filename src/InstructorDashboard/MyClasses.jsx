import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const MyClasses = () => {


    const [allClasses, setAllClasses] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/allClasses/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllClasses(data);
            })
    }, [])

    return (
        <>
            <h3 className='text-xl font-bold text-center mb-8'>Instructor AllClasses Information : </h3>
            <div className="overflow-x-auto">

                <table className="table">

                    <thead>

                        <tr className=' font-bold'>
                            <th>#</th>
                            <th>Class Photo</th>
                            <th>Class Name</th>

                            <th>Class Status</th>
                            <th>FeedBack</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((data, index) => <tr
                                data={data}
                                key={data._id}

                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    <div className="flex items-center space-x-3 w-full">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data?.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data?.class_name}

                                </td>
                                <td>
                                    {data?.status}
                                </td>
                                <td>
                                    {data?.feedback}
                                </td>
                                <th>
                                    <button className="btn btn-primary btn-xs">Update</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div></>

    );
};

export default MyClasses;