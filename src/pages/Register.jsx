import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import or from "../assets/or.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        data
      );
      if (response.status === 201) {
        navigate("/login");
        alert("Registration successful!");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <AuthWrapper>
        <form className="max-w-[486px] py-2" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-bold mb-2">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-gray-600 font-medium text-lg mb-5 ">
            Lets get started by filling out the information below
          </p>
          <div>
            <div className="flex items-center gap-1">
              <div className="w-1/2">
                <label htmlFor="fname" className="custom-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="custom-input"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="lname" className="custom-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="custom-input"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label htmlFor="password" className="custom-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your password"
              className="custom-input"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label htmlFor="cpassword" className="custom-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm Your password"
              className="custom-input"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
            <div className="flex gap-1.5 items-center mt-3.5">
              <input
                type="checkbox"
                id="agree"
                className="h-[20px] w-[20px] rounded-sm bg-[#3D9970]"
                {...register("agree", {
                  required: "You must agree to the terms and conditions",
                })}
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
            {errors.agree && (
              <span className="text-red-500 block">{errors.agree.message}</span>
            )}
            <button type="submit" className="custom-button mt-3.5">
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
