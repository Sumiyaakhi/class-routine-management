import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Pages/Providers/AuthProviders'

const useUsers = () =>{
    const {user} = useContext(AuthContext)
     const {isLoading, refetch, data} = useQuery({
        queryKey: ["data"],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        },
     })
     if (isLoading) return 'Loading...'
     return [data, refetch, isLoading]
}

export default useUsers;