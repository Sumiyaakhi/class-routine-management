import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {refetch, data: isAdmin, isLoading:isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async()=> {
            const res = await fetch(`'http://localhost:5000/users/admin/${user.email}`)
            console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [refetch, isAdmin, isAdminLoading];
};

export default useAdmin;