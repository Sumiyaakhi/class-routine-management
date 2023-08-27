import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    console.log(user.email);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log('is admin response', res);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading]
};

export default useAdmin;