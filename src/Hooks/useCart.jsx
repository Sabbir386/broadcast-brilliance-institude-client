import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (user && user.email) {


                const response = await fetch(`http://localhost:5000/bookingClass/?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });


                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch booking class data');
                }
            } else {
                throw new Error('User email is missing');
            }
        }
    })
    return [cart, refetch]

}
export default useCart;