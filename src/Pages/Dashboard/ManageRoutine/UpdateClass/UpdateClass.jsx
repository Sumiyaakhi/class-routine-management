import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateClass = ({singleClass, handleUpdate}) => {
const {day, firstClass,firstTeacher,secondClass,secondTeacher,thirdClass,thirdTeacher,fourthClass,fourthTeacher,fifthClass,fifthTeacher,sixthClass,sixthTeacher,_id} = singleClass;
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleUpdate({
        id:_id,
        ...data
        // day:day,
    //     firstClass:firstClass,
    //     firstTeacher:firstTeacher,
    //     secondClass:secondClass,
    //   secondTeacher:secondTeacher,
    //     thirdClass:thirdClass,
    //     thirdTeacher:thirdTeacher,
    //     fourthClass:fourthClass,
    //   fourthTeacher:fourthTeacher,
    //     fifthClass:fifthClass,
    //     fifthTeacher:fifthTeacher,
    //     sixthClass:sixthClass,
    //   sixthTeacher:sixthTeacher
        
      })
   
    
  }


    return (
        <div>
      {/* The button to open modal */}
      <label htmlFor={`my-modal-${_id}`} className="btn bg-primary text-white">
      Update
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">

        <form  onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          
         <div className='items-center justify-center flex '>
         <input
            className="m-4 p-2 border rounded-xl"
            {...register("day")}
            placeholder="Name of the Day"
            defaultValue={day}
          />
         </div>
          <br />
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("firstClass")}
            placeholder="Class Name For 8:50 "
           defaultValue={firstClass}
          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("firstTeacher")}
            placeholder=" Teacher's name for 8:50"
            defaultValue={firstTeacher}

          />
          </div>
         
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("secondClass")}
            placeholder="Class Name For 9:40"
            defaultValue={secondClass}

          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("secondTeacher")}
            placeholder=" Teacher's name for 9:40"
            defaultValue={secondTeacher}

          />
          </div>
          
          
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("thirdClass")}
            placeholder="Class Name For 10:30"
            defaultValue={thirdClass}

          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("thirdTeacher")}
            placeholder=" Teacher's name for 10:30"
            defaultValue={thirdTeacher}

          />
          </div>
          
          
          
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fourthClass")}
            placeholder="Class Name For 11:20 "
            defaultValue={fourthClass}

          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fourthTeacher")}
            placeholder=" Teacher's name for 11:20"
            defaultValue={fourthTeacher}

          />
          </div>
          
          
       
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fifthClass")}
            placeholder="Class Name For 12:10 "
            defaultValue={fifthClass}

          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("fifthTeacher")}
            placeholder=" Teacher's name for 12:10"
            defaultValue={fifthTeacher}

          />
          </div>
          
          
         
          <div className='flex'>
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("sixthClass")}
            placeholder="Class Name For 1:30"
            defaultValue={sixthClass}

          />
          <input
            className="m-4 p-2 border rounded-xl w-1/2"
            {...register("sixthTeacher")}
            placeholder=" Teacher's name for 1:30"
            defaultValue={sixthTeacher}

          />
          </div>
          
          
          <br />
  
          <button className="btn bg-primary text-white btn-lg my-4" type="submit">Update</button>
        
          <div className="">
            <label  htmlFor={`my-modal-${_id}`} className="btn bg-primary text-white">
              close
            </label>
          </div>
          
        </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateClass;