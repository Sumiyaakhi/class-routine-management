import React, { useContext } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProviders";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBookDead, FaHome, FaUserAlt } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut, isLoading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-primary text-white drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-primary text-base-content flex justify-center ">
            <div>
              <div className="avatar flex justify-center items-center">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <h1 className="text-xl text-center py-1">{user.displayName}</h1>
              <div className="divider"></div>
            </div>

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome>Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUserAlt></FaUserAlt> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageRoutine">
                    {" "}
                    <FaBookDead></FaBookDead> Manage Routine
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addAClass">
                    {" "}
                    <FaBookDead></FaBookDead> Add A Class
                  </NavLink>
                </li>
                <div className="divider"></div>
                <button
                  onClick={handleLogOut}
                  className="btn bg-white text-primary"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome>Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/onlyUser">
                    <FaUserAlt></FaUserAlt> Make admin
                  </NavLink>
                </li>
                <button
                  onClick={handleLogOut}
                  className="btn bg-white text-primary"
                >
                  Log Out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
