import React, { useContext, useEffect, useState } from "react";
import AddClass from "./AddClass/AddClass";
import { AuthContext } from "../../Providers/AuthProviders";
import useClasses from "../../../hooks/useClasses";
import UpdateClass from "./UpdateClass/UpdateClass";
import Swal from "sweetalert2";

const ManageRoutine = () => {
  const { user } = useContext(AuthContext);
  const [data, refetch, isLoading] = useClasses();
  console.log(data);
  const [semester, setSemester] = useState("8th semester");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [addClass, setAddClass] = useState([]);
  const [control, setControl] = useState(false)

  const handleSelectedSemester = (e) => {
    setSelectedSemester(e.target.value);
  };

  useEffect(()=>{
    fetch('https://class-routine-management-server.vercel.app/getClass')
    .then(res => res.json())
    .then(data=> {
        setAddClass(data);
    } )
  },[control]);

  const handleDelete =  id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this row!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://class-routine-management-server.vercel.app/addAClass/${id}`,{
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data =>{
          if(data.deletedCount>0){
            setControl(!control); 
        Swal.fire(
          'Deleted!',
          'This row has been deleted.',
          'success'
        )
          }
        })
        
      }
    })
    

  }

  const handleUpdate = (data) => {
    fetch(`https://class-routine-management-server.vercel.app/updateClass/${data.id}`,{
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){
      Swal.fire({
        icon: "success",
        title: "Class update successful",
      });
      setControl(!control);
    }
    })
  }

  return (
    <div className="w-full h-full mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center my-8">
        Department of Computer Science & Engineering
      </h1>

      <h1 className="text-3xl text-center font-serif font-bold">
        Daily Class Routine of {selectedSemester}
      </h1>
      {/* semester selection */}
      <div className="items-center flex justify-center">
        <select
          className="border p-2 rounded-md shadow-md mb-2 "
          value={selectedSemester}
          onChange={handleSelectedSemester}
        >
          <option value="1st Semester">1st Semester</option>
          <option value="2nd Semester">2nd Semester</option>
          <option value="3rd Semester">3rd Semester</option>
          <option value="4th Semester">4th Semester</option>
          <option value="5th Semester">5th Semester</option>
          <option value="6th Semester">6th Semester</option>
          <option value="7th Semester">7th Semester</option>
          <option value="8th Semester">8th Semester</option>
        </select>
      </div>

      {/* add any class */}
      <div className="mt-4">
     

      <div className="overflow-x-auto ">
        <table className="table table-compact w-full ">
          <thead>
            <tr className="text-xl text-black uppercase">
              <th>Day</th>
              <th>8:50</th>
              <th>9:40</th>
              <th>10:30</th>
              <th>11:20</th>
              <th>12:10</th>
              <th>1:30</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addClass.map((singleClass, index) => (
              <tr key={index}>
                <th className="text-xl">{singleClass.day}</th>
                <td>
                    <div>
                    <h1 className="text-xl">{singleClass.firstClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.firstTeacher}</h1>
                    </div>
                 
                </td>
                <td> <div>
                    <h1  className="text-xl">{singleClass.secondClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.secondTeacher}</h1>
                    </div></td>
                <td>  <div>
                    <h1 className="text-xl">{singleClass.thirdClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.thirdTeacher}</h1>
                    </div></td>
                <td> <div>
                    <h1 className="text-xl">{singleClass.fourthClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.fourthTeacher}</h1>
                    </div></td>
                <td> <div>
                    <h1 className="text-xl">{singleClass.fifthClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.fifthTeacher}</h1>
                    </div></td>
                <td>  <div>
                    <h1 className="text-xl">{singleClass.sixthClass}</h1>
                    </div>
                    <div>
                    <h1>{singleClass.sixthTeacher}</h1>
                    </div></td>
                
                <td>  
                  <button className=""
                  > 
                  <UpdateClass
                  key={singleClass._id}
                  singleClass={singleClass}
                   handleUpdate={handleUpdate}
                   ></UpdateClass>
                  </button> 
                </td>
                <td>
                   <button onClick={() => handleDelete(singleClass._id)} className="btn bg-primary text-white rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ManageRoutine;
