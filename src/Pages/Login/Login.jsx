import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/animation_lkpehwcx.json";
import backgroundImageUrl from '../../assets/Images/login-bg.jpg'
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const from = location.state?.from?.pathname || "/";
  const {user, signIn} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log("logged in user",user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
      Navigate(from, { replace: true });
    });
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered "
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
               
                

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
        </div>
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
