import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import {  FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/" ;

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedUser =  result.user;
            console.log("user data", loggedUser);
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role:"user"}
            fetch('https://class-routine-management-server.vercel.app/users',{
                method: "POST",
                headers:{
                  'content-type': "application/json"
                },
                body: JSON.stringify(savedUser)
              })
              .then(res =>res.json())
              .then(data => {
                console.log(data);
               
                  Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                  });
                  navigate(from, { replace: true });
               
              })
           
        })
       
    }
        
    
    
    return (
        <div className='flex justify-center'>
           <div className='divider'></div> 
           <div className='my-4'>
            <button onClick={handleGoogleSignIn} className='flex gap-3 justify-center items-center py-3 px-5 rounded-lg bg-primary text-white'> <FaGoogle></FaGoogle>
           <p>Click for Google login </p>
           </button>
           </div>
           
        </div>
    );
};

export default SocialLogin;