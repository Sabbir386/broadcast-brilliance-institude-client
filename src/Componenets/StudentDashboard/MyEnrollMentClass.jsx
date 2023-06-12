import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyEnrollMentClass = () => {
    const { user } = useContext(AuthContext);
    const [paymentProduct, setPaymentProduct] = useState([]);
    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/payment/transaction/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPaymentProduct(data);
                })
        }
    }, [user])
    return (
        <div>
            <p className='text-xl font-semibold mb-5'>Successfull payment Class List</p>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className='text-center bg-gray-200 '>
                        <tr className='font-bold'>

                            <th>#</th>
                            <th>class</th>
                            <th>Class-Name</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            paymentProduct.map((product, index) => <tr
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
                                    <p>Succesfully Enrolled</p>
                                </td>






                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyEnrollMentClass;