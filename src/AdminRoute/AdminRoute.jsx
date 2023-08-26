import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;