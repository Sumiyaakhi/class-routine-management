import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const AddClass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
    
        fetch("https://class-routine-management-server.vercel.app/addAClass", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
          reset()
      };
      const handleAlert = () => {
        Swal.fire({
          icon: "success",
          title: "Class added Successfully",
        });
        
      }
    return (
        <div className='w-full h-full mt-2 mx-12'>
         
       <div className=''>
       <form  onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          
         <div className='items-center justify-center flex '>
         <input
            className="m-4 p-2 border rounded-xl"
            {...register("day")}
            placeholder="Name of the Day"
            
          />
         </div>
          <br />
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("firstClass")}
            placeholder="Class Name For 8:50 "
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("firstTeacher")}
            placeholder=" Teacher's name for 8:50"
           
          />
          </div>
         
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("secondClass")}
            placeholder="Class Name For 9:40"
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("secondTeacher")}
            placeholder=" Teacher's name for 9:40"
           
          />
          </div>
          
          
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("thirdClass")}
            placeholder="Class Name For 10:30"
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("thirdTeacher")}
            placeholder=" Teacher's name for 10:30"
           
          />
          </div>
          
          
          
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fourthClass")}
            placeholder="Class Name For 11:20 "
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fourthTeacher")}
            placeholder=" Teacher's name for 11:20"
           
          />
          </div>
          
          
       
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fifthClass")}
            placeholder="Class Name For 12:10 "
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fifthTeacher")}
            placeholder=" Teacher's name for 12:10"
           
          />
          </div>
          
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("sixthClass")}
            placeholder="Class Name For 1:30"
           
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("sixthTeacher")}
            placeholder=" Teacher's name for 1:30"
           
          />
          </div>
          
          
          <br />
  
         <div className='items-center flex justify-center'>
         <button onClick={handleAlert} className="extra btn bg-primary text-white">
            <input type="submit" value={"Add "}  />
          </button>
         </div>
          
        </form>
       </div>
      </div>
    );
};

export default AddClass;