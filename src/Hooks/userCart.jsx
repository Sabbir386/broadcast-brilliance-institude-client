import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const userCart = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, isError, data, error } = useQuery({
        queryKey: ['userdata'],
        queryFn: async () => {

            const response = await fetch('http://localhost:5000/users')
            return response.json();
        }
    })


    return [data, refetch]

}
export default userCart;