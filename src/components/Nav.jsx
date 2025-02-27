import React from "react";
import logo from "../assets/logo.png";
import person from "../assets/person.png";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
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
        <div className="hidden md:flex gap-2 items-center">
          <img src={person} alt="person avatar" />
          <p className="text-[26px] font-medium">Aisha Cucurella</p>
          <IoIosArrowDown size={20} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
