import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [paymentHistoryPage, setPaymentHistoryPage] = useState([]);
    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/payment/history/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPaymentHistoryPage(data);
                })
        }
    }, [user])
    return (
        <div>
            <p className='text-xl font-semibold mb-5 text-center'>Payment History :</p>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className='text-center bg-gray-200 '>
                        <tr className='font-bold'>

                            <th>#</th>
                            <th>Course-Name</th>

                            <th>Date</th>

                            <th>Transaction Id</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            paymentHistoryPage.map((product, index) => <tr
                                key={product._id}
                            >
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {product?.class_name}
                                </td>
                                <td>
                                    ${product?.date}
                                </td>
                                <td>
                                    ${product?.transactionId}
                                </td>
                                <td>
                                    <p>Successfull</p>
                                </td>



                            </tr>)
                        }


                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default PaymentHistory;