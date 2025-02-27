import React from "react";
import logo from "../assets/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#035a33] text-white mt-11 py-[40px]">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[25px] custom-layout">
          <div className="max-w-[379px]">
            <h1>
              <img src={logo} alt="logo" className="block mb-3.5" />
            </h1>
            <div className="text-[#FFFFFFE5]">
              <p className="my-[15px]">
                Discover, rent, and find your ideal home hassle-free with
                BetaHouse. Take control of your rental journey today!
              </p>
              <p className="flex gap-[12px] items-center text-[15px]">
                <FaMapMarkerAlt /> 95 Tinubu Estate, Lekki, Lagos
              </p>
              <p className="flex gap-[12px] items-center text-[15px]">
                {" "}
                <FaPhone /> +234 675 8935 675
              </p>
              <p className="flex gap-[12px] items-center text-[15px]">
                <MdMailOutline /> support@rentbetahouse.com
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold mb-3.5">Quick Links</h1>
            <div className="text-[#FFFFFFE5] flex flex-col gap-[15px]">
              <p>Home</p>
              <p>Properties</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-3.5">More</h1>
            <div className="text-[#FFFFFFE5]  flex flex-col gap-[15px]">
              <p>Agents</p>
              <p>Affordable Houses</p>
              <p>FAQ's</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-3.5">Popular Searches</h1>
            <div className="text-[#ffffffe5]  flex flex-col gap-[15px]">
              <p>Apartment for sale</p>
              <p>Apartment for Rent</p>
              <p>3 Bedroom Flat</p>
              <p>Bungalow</p>
            </div>
          </div>
        </div>
        <hr className="my-[30px]" />
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[25px] custom-layout">
          <div>
            <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
          </div>
          <div className="w-[187px]">
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
