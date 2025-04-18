import React from "react";
import notFoundImage from "../../assets/Images/notFound.png";
import bgImage from "../../assets/Images/404Bgimg.png";
import { NavLink } from "react-router";
const NotFound = () => {
  return (
    <>
      <div
        className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex justify-center items-center">
          <img src={notFoundImage} alt="" />
        </div>
        <h1 className="text-3xl text-gray-400 text-center font-bold mt-4">
          Opps! Page Not Found
        </h1>
      <div className="flex justify-center items-center mt-4">
      <NavLink to="/">
          <button className="btn bg-[#FB8133] rounded-lg text-center text-gray-100"> BACK TO HOME</button>
        </NavLink>
      </div>
      </div>
    </>
  );
};

export default NotFound;
