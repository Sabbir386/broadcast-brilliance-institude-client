import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center'><progress className="progress w-32 mx-auto"></progress></div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;