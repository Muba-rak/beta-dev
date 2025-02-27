import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import or from "../assets/or.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <AuthWrapper>
        <form>
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back to BetaHouse!
          </h1>
          <p className="text-gray-600 font-medium text-lg mb-5 ">
            Lets get started by filling out the information below
          </p>
          <div>
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
            <div className="flex items-center justify-between my-6">
              <div className="flex gap-1.5 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-[20px] w-[20px] rounded-sm bg-green-500"
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p className="text-sm text-red-500">Forgot Password</p>
            </div>
            <button type="submit" className="custom-button">
              Sign In
            </button>
            <img src={or} alt="or" className="block mx-auto my-4" />
            <button className="flex items-center justify-center gap-2 w-full h-[64px] border-2 border-black rounded-2xl text-xl font-normal ">
              <FcGoogle size={22} /> Continue with Google
            </button>
            <p className="text-center my-5 text-gray-400 text-xl">
              New User?{" "}
              <Link className="text-[#3D9970]" to="/register">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </form>
      </AuthWrapper>
    </>
  );
};

export default Login;
