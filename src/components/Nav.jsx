import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import person from "../assets/person.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const redirect = useNavigate();
  const handleLogout = () => {
    redirect("/login");
    localStorage.removeItem("user");
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <header className="bg-[#1D293F1F]">
      <nav className="h-[121px] text-white custom-layout flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:flex gap-4 text-[20px] font-medium">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
        {isLoggedIn ? (
          <div className="hidden md:flex gap-2 items-center relative">
            <img src={person} alt="person avatar" />
            <p className="text-[26px] font-medium capitalize">
              {user?.firstName} {user?.lastName}
            </p>
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              className="cursor-pointer"
            >
              {showDropDown ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </button>

            {showDropDown && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-semibold rounded-xl py-3 px-7 absolute right-0 top-[50px] cursor-pointer"
              >
                LOG OUT
              </button>
            )}
          </div>
        ) : (
          <div className="flex gap-2.5">
            <Link to="/login">
              <button className="text-white bg-[#3D9970] w-[120px] h-[40px] rounded-md font-medium text-[20px] cursor-pointer">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-white bg-[#3D9970] w-[120px] h-[40px] rounded-md font-medium text-[20px] cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
