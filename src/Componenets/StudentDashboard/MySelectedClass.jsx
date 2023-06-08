import React from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const [cart, refetch] = useCart();



    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure,want to delete this class?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookingClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your select class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <>
            <div className='flex  gap-4 font-semibold items-center'>
                <p className=''>Total Selected Class : {cart.length}</p>
                <p>Total Price : ${totalPrice}</p>
                <button className="btn btn-sm btn-info">Payment</button>

            </div>
            <div className="divider"></div>

            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className='text-center bg-gray-200 '>
                        <tr className='font-bold'>

                            <th>#</th>
                            <th>class</th>
                            <th>Class-Name</th>
                            <th>Price</th>
                            <th>Delete Options</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            cart.map((product, index) => <tr
                                key={product._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {product.class_name}
                                </td>
                                <td>
                                    ${product.price}
                                </td>


                                <td className=''>
                                    <FaTrashAlt onClick={() => handleDelete(product._id)} className='mx-auto text-red-500 h-7 w-8 cursor-pointer'>Delete</FaTrashAlt>
                                </td>


                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MySelectedClass;