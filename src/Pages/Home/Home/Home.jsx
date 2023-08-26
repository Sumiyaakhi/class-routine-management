import React from "react";

const Home = () => {
  // const backgroundStyle = {
  //     backgroundImage: "url('/src/assets/Images/background.jpg')",
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   }
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: "url('/src/assets/Images/new.jpg')" }}
    >
      <div className="mb-72">
        <h1 className=" text-6xl font-bold  font-serif  sm:text-center pb-4">
          Dynamic class routine management{" "}
        </h1>
        <p className=" text-5xl font-bold text-center font-serif  ">
          Dept. of Computer Science & Engineering
        </p>
      </div>
    </div>
  );
};

export default Home;
