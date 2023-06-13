import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { isLoading, refetch, isError, data: usersData = [], error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const response = await fetch('https://broadcast-brilliance-institude-server-side.vercel.app/users')
            return response.json();

        }
    })


    const handleAdmin = (id) => {
        fetch(`https://broadcast-brilliance-institude-server-side.vercel.app/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This User Admin Now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    const handleInstructor = (id) => {
        fetch(`https://broadcast-brilliance-institude-server-side.vercel.app/users/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This User Instructor Now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <div className='w-full'>
            <p className='text-center mb-5 font-bold text-xl'>All Types Of Users :</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className=' bg-gray-200 '>
                        <tr className='font-semibold'>
                            <th>#</th>
                            <th>User-Name</th>
                            <th>User-Email</th>
                            <th>Admin-Role</th>
                            <th>Instructor-Role</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            usersData.map((user, index) => <tr
                                key={user._id}

                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' :

                                        <div onClick={() => handleAdmin(user._id)} className='mx-auto text-blue-500 h-4 w-6 cursor-pointer'><FaUser></FaUser></div>

                                }
                                </td>
                                <td className=''>
                                    {
                                        user.role === 'instructor' ? 'instructor' :

                                            <div onClick={() => handleInstructor(user._id)} className='mx-auto text-blue-500 h-4 w-6 cursor-pointer'><FaUser></FaUser></div>
                                    }

                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;