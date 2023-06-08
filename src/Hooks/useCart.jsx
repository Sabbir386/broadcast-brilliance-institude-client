import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['bookingClass', user?.email],
        queryFn: async () => {

            const response = await fetch(`http://localhost:5000/bookingClass/?email=${user?.email}`)
            return response.json();

        }
    })
    return [cart, refetch]

}
export default useCart;