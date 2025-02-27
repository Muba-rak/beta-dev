import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import or from "../assets/or.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <>
      <AuthWrapper>
        <form className="max-w-[486px] py-2">
          <h1 className="text-xl font-bold mb-2">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-gray-600 font-medium text-lg mb-5 ">
            Lets get started by filling out the information below
          </p>
          <div>
            <div className="flex items-center gap-1">
              <div className=" w-1/2 ">
                <label htmlFor="fname" className="custom-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="custom-input"
                />
              </div>
              <div className="w-1/2 ">
                <label htmlFor="lname" className="custom-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="custom-input"
                />
              </div>
            </div>
            <label htmlFor="email" className="custom-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="custom-input"
            />
            <label htmlFor="password" className="custom-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your password"
              className="custom-input"
            />
            <label htmlFor="cpassword" className="custom-label">
              Confirm Password
            </label>
            <input
              type="cpassword"
              id="password"
              placeholder="Confirm Your password"
              className="custom-input"
            />
            <div className="flex gap-1.5 items-center my-3.5">
              <input
                type="checkbox"
                id="agree"
                className="h-[20px] w-[20px] rounded-sm bg-[#3D9970]"
              />
              <label htmlFor="agree">
                {" "}
                I agree to{" "}
                <span className="text-[#3D9970]">
                  Terms of Service
                </span> and{" "}
                <span className="text-[#3D9970]">Privacy Policies</span>{" "}
              </label>
            </div>
            <button type="submit" className="custom-button">
              Sign Up
            </button>
            <img src={or} alt="or" className="block mx-auto my-3" />
            <button className="flex items-center justify-center gap-2 w-full h-[64px] border-2 border-black rounded-2xl text-xl font-normal ">
              <FcGoogle size={22} /> Continue with Google
            </button>
            <p className="text-center my-5 text-gray-400 text-xl">
              Already have an account?
              <Link className="text-[#3D9970] ml-1.5" to="/login">
                Sign In
              </Link>{" "}
            </p>
          </div>
        </form>
      </AuthWrapper>
    </>
  );
};

export default Register;
