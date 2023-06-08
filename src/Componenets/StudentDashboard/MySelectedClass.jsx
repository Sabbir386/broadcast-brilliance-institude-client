import React from 'react';
import useCart from '../../Hooks/useCart';

const MySelectedClass = () => {
    const [cart] = useCart();

    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <>
            <div className='flex justify-between gap-4 font-semibold items-center'>
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
                            <th>ClassName</th>
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

                                <td>
                                    <button className="btn btn-warning btn-sm">Delete</button>
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