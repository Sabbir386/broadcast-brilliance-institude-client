import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const userCart = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, isError, data, error } = useQuery({
        queryKey: ['userdata'],
        queryFn: async () => {

            const response = await fetch('https://broadcast-brilliance-institude-server-side.vercel.app/users')
            return response.json();
        }
    })


    return [data, refetch]

}
export default userCart;