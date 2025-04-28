import React from "react";
import {

  navLinks,
} from "../../../src/JavaScript/NavLink/NavigationLink";
import { NavLink, Link } from "react-router";
import Login from "../../Pages/Auth/Login";

const Navbar = () => {

 
  const Links = navLinks.map((link, index) => (
    <NavLink key={index} className="p-2 text-xl" to={link.path}>
      {link.name}
    </NavLink>
  ));
  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col justify-start gap-x-4"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Books Vibes</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row justify-center items-center gap-x-4">
          {Links}
        </ul>
      </div>
      <ul className="navbar-end space-x-4 ">
   
    
    <Link to='/singUp' >
    <button className='btn btn-primary' >SingUp</button>
    </Link>
      </ul>
    </div>
  );
};

export default Navbar;
