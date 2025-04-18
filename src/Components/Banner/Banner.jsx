import React from "react";
import bannerImage from "../../assets/Images/bannerBook.png";
import { NavLink } from "react-router";
const Banner = () => {
  return (
    <div className="hero bg-gray-200 max-h-screen rounded-lg mx-w-10/12 my-4 md:my-14 ">
      <div className="hero-content px-2 lg:px-9 flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm" />
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold py-4">Books to freshen up your bookshelf</h1>
          <NavLink to='/Listed Books'>
          <button className="btn bg-[#23BE0A] font-semibold text-white">View The List</button>

          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
