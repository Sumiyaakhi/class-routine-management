import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
 const handleLogOut = ()=>{
  logOut()
  .then(()=>{

  })
  .catch(error=>{
    console.log(error.message);
  })
 } 
    return ( 
        <div className="navbar fixed top-0  font-serif bg-opacity-30 z-10 bg-base-300  px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-xl ">
       <li ><NavLink  to='/'>Home</NavLink></li>
      <li> <NavLink  to='/routine'>Routine</NavLink></li>
      {
        user ? <> <li> <NavLink  to='/dashboard'>Dashboard</NavLink></li></> : <></>
      }
      </ul>
    </div>
   <img className='w-20 h-20' src="../../../public/clg logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul  className="menu menu-horizontal px-5  text-xl ">
    <li><NavLink  to='/'>Home</NavLink></li>
      <li> <NavLink  to='/routine'>Routine</NavLink></li>
      {
        user ? <> <li> <NavLink  to='/dashboard'>Dashboard</NavLink></li></> : <></>
      }
    </ul>
  </div>
  <div className="navbar-end">
      {
        user ? <> <button onClick={handleLogOut}> <Link className='btn bg-black border-0 text-white' >Log Out</Link></button></>: <>  <Link className='btn bg-black border-0 text-white' to='/login'>Admin Login</Link></>
      }

  
  </div>
</div>
    );
};

export default Navbar;