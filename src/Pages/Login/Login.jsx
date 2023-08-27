import React, { useContext,  useRef, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/animation_lkpehwcx.json";
import backgroundImageUrl from '../../assets/Images/login-bg.jpg'
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef()
  const [error, SetError] = useState("")
  const {user,resetPassword, signIn} = useContext(AuthContext)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(emailRef.current.value);
    signIn(emailRef.current.value, data.password)
    .then((result) => {
      const user = result.user;
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
      reset();
      navigate(from, { replace: true });
    })
    .catch((error)=>{
      SetError(error)
      console.log("message for error",error.message);
    })
    
   
  };
  const handleResetPassword = () =>{
    const emailForReset = emailRef.current.value
    resetPassword(emailForReset)
    .then(()=>{
      alert('Please check your Email...')
    })
}

return (
    <div>
      <div
       style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full">
           <Lottie animationData={loginAnimation} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-serif font-bold text-primary text-center pt-6 ">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                  type="text"
                  // {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered "
                  ref={emailRef}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">email is required</p>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
                  type={"password"}
                  {...register("password", { required: true })}
                  placeholder="type password again"
                  className="input input-bordered "
                />
               
               {errors.password?.type === "required" && (
                  <p role="alert">password is required</p>
                )}

               <label className="label">
                 <button onClick={handleResetPassword} className="underline text-primary"> <Link>Forgot password? Click to Reset</Link></button>
                </label>
        </div>
        <p className="text-red-500">{error.message}</p>
        <div className="form-control mt-6">
        <input
                  className="btn bg-primary text-white "
                  type="submit"
                  value="Login"
                />
        </div>
        <Link className='text-primary text-center underline' to="/registration">New there? Please Register</Link>
      </form>
      <SocialLogin></SocialLogin>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Login;
