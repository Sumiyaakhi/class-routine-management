import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const {user} = useContext(AuthContext)
     const {isLoading, refetch, data} = useQuery({
        queryKey: ["data"],
        queryFn: async () =>{
            const res = await fetch('https://class-routine-management-server.vercel.app/getClass')
            return res.json();
        },
     })
     if (isLoading) return 'Loading...'
     return [data, refetch, isLoading]

    };
export default useClasses;