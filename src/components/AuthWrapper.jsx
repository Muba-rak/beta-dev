import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  return (
    <div className="flex items-center  h-screen w-full">
      <div className="min-h-screen w-[100%] lg:w-[50%] flex justify-center items-center p-2 overflow-y-scroll">
        {children}
      </div>
      <div className="formbg h-screen hidden lg:block lg:w-[50%] pt-7 pl-7">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default AuthWrapper;
