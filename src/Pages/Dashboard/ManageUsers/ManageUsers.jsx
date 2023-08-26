import React, { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
 const [ ,refetch] = useUsers();
 const [control,setControl] = useState(false)
//  console.log(data);
 if(loading){
<div><span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span></div>
 }
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, [control]);

  const handleMakeAdmin = users =>{
fetch(`http://localhost:5000/users/admin/${users._id}`,{
  method: "PATCH",
})
.then(res=> res.json())
.then(data =>{
  if(data.modifiedCount){
    setControl(!control)
    Swal.fire({
      icon: "success",
      title: `${users.name} is admin now...`,
    });
  }
})
  }

  const handleDelete =  id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`,{
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data =>{
          if(data.deletedCount>0){
        refetch();
        setControl(!control)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
          }
        })
        
      }
    })
    

  }
  return (
    <div>
      <div className="text-primary text-3xl font-serif font-bold text-center mb-5">
        <h1>Total Users : { users.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Image & Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((singleUser,index) =>  <tr key={singleUser._id}>
              <th>
                {index+1}
              </th>
              <td>
                <div className="flex items-center space-x-3 ">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleUser.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{singleUser.name}</div>
                    
                  </div>
                </div>
              </td>
              <td>
                {singleUser.email}
                
              </td>
              <td>
                {
              singleUser.role === 'admin' ? 'admin' : 
              <button onClick={()=> handleMakeAdmin(singleUser)} className="btn bg-primary text-white btn-ghost btn-xs">Make Admin</button>
                }
                
                </td>
              <th>
              <button onClick={()=> handleDelete(singleUser._id)} className="btn bg-primary border-white btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

              </th>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
