import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/animation_lkpehwcx.json";
import backgroundImageUrl from '../../assets/Images/login-bg.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";

const Registration = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {createUser, updateUserProfile, resetPassword} = useContext(AuthContext);
    const [error, setError] = useState("")
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data =>{
        if(data.password !== data.confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry! Your Password is not matched',
            })
            return;
        }

        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
              const savedUser = { name: data.name, email: data.email, image: data.photoURL, role:"user"}
              fetch('https://class-routine-management-server.vercel.app/users',{
                method: "POST",
                headers:{
                  'content-type': "application/json"
                },
                body: JSON.stringify(savedUser)
              })
              .then(res =>res.json())
              .then(data => {
                if(data.insertedId){
                  reset();
                  Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                  });
                  navigate(from, { replace: true });
                }
              })
              .catch((error)=>{
                setError(error)
                console.log("message for error",error.message);
              })
                
            })
        })
        
        }
        

    
    return (
        <div className="">
        <div
         style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="hero min-h-screen pt-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
           
        

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-serif font-bold text-primary text-center pt-4">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
               
                <input type="text" 
                {...register("name", { required: true })}
                placeholder="name" className="input input-bordered " />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <input type="text" 
                {...register("photoURL", { required: true })}
                placeholder="Photo URL" className="input input-bordered " />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
               
                <input type="text" 
                {...register("email", { required: true })}
                placeholder="email" className="input input-bordered " />
                  {errors.email?.type === 'required' && <p role="alert">email is required</p>}
                  
              </div>
              <div className="form-control">
                <input type="password"  {...register("password", { required: true,maxLength:20, minLength:6,pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/ })}
                placeholder="password" className="input input-bordered " />
                {errors.password?.type === 'required' && <p className='text-red-400' role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-400' role="alert">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-400' role="alert">Password must have one uppercase, one lowercase, one number and one special character</p>}
                
              </div>
              <div className='form-control'>
            <input  type="password" {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password" className="input input-bordered " />
              </div>
              <div className="form-control mt-6 ">
                
                <input  className="btn text-white bg-primary border-0" type="submit" value="Sign Up" />
              </div>
              <p className="text-red-600">{error}</p>
            </form>
            <p className='mx-auto mb-3 underline text-primary'><Link to='/login'>Already have an account?</Link></p>
        <SocialLogin></SocialLogin>
            </div>
            <div className="text-center lg:text-left w-full">
             <Lottie animationData={loginAnimation} loop={true} />
            </div>
          </div>
         
        </div>
      </div>
    );
};

export default Registration;