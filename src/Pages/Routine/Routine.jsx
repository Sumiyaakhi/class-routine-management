import React, { useEffect, useState } from 'react';

const Routine = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addClass, setAddClass] = useState([]);


   if(loading){
  <div><span className="loading loading-ring loading-xs"></span>
  <span className="loading loading-ring loading-sm"></span>
  <span className="loading loading-ring loading-md"></span>
  <span className="loading loading-ring loading-lg"></span></div>
   }
   useEffect(()=>{
    fetch('https://class-routine-management-server.vercel.app/getClass')
    .then(res => res.json())
    .then(data=> {
        setAddClass(data);
    } )
  },[]);
    return (
        <div className="w-full h-full mx-auto ">
      <div className='mt-32 mb-4'>
      <h1 className="text-4xl font-serif font-bold text-center ">
        Department of Computer Science & Engineering
      </h1>
      <h1 className="text-4xl font-serif font-bold text-center pt-2">
       8th Semester
      </h1>
      <button className='btn bg-black text-white font-serif mx-3'>Download pdf</button>
      </div>

      
      {/* semester selection */}
      

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
                
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
};

export default Routine;