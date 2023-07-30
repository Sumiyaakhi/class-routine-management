import React from 'react';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: "url('/src/assets/Images/background.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }
    return (
        <div style={backgroundStyle} className='w-screen h-screen'>
            <h1 className='text-5xl  font-serif font-bold text-white text-center pt-28 '>Students Class Routine Management <br /> For Dept. of</h1>
            <h2> </h2>
        </div>
    );
};

export default Home;