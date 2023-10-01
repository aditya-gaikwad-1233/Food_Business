import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4 shadow-red-50">
      {/* Logo */}
      <div >
        <Link to="/" className="flex flex-row gap-x-4 justify-center items-center">
          <img src={Logo} alt="Logo" width={80} loading="lazy" />
          <p className="text-richblack-25 text-2xl"> Kitchen Kween</p>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6 text-richblack-25">
          <li className="hover:font-bold overflow-hidden hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-bold overflow-hidden hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:font-bold overflow-hidden hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4 text-white">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:font-bold overflow-hidden hover:underline hover:bg-blue-500/[.4] transition-colors">Log in</button>
          </Link>
        )}
        
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:font-bold overflow-hidden hover:underline hover:bg-blue-500/[.4] transition-colors">Sign up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
              setIsLoggedIn(false)
              toast.success("Logged out");
            }}>Log out</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
