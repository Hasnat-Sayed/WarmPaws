import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center min-h-screen'><Loading></Loading></div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;