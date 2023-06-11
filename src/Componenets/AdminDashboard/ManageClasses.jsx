import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    const { isLoading, refetch, isError, data: classPagedata = [], error } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {

            const response = await fetch('http://localhost:5000/allClasses')
            return response.json();

        }
    })
    const handleApproved = (id) => {
        fetch(`http://localhost:5000/allClasses/approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' Approved Class',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    const handleDeny = (id) => {
        fetch(`http://localhost:5000/allClasses/deny/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deny Class',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    return (
        <div className="overflow-x-auto">

            <table className="table">

                <thead>

                    <tr className=' font-bold'>

                        <th>Class Image</th>
                        <th>Class Name</th>

                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Available Seats</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classPagedata.map((data, index) => <tr
                            data={data}
                            key={data._id}

                        >


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
                                {data?.instructor_name
                                }
                            </td>
                            <td>
                                {data?.instructor_email
                                }
                            </td>

                            <td>
                                {data?.price}
                            </td>
                            <td>
                                {data?.status}
                            </td>
                            < td>
                                {data?.available_seats

                                }
                            </td>

                            <th className=''>
                                <div className='space-y-3 text-white'>
                                    <button onClick={() => handleApproved(data?._id)} className="btn btn-primary btn-xs">

                                        Approved</button>
                                    <button onClick={() => handleDeny(data?._id)} className="btn btn-primary btn-xs">

                                        Deny</button>

                                    <button className="btn btn-primary btn-xs">FeedBack</button>
                                </div>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default ManageClasses;