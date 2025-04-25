import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import or from "../assets/or.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";
import { axiosInstance } from "../utils/axiosConfig";
// work on remember me
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const url = "/login";
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setValue("email", savedEmail);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post(url, data);
      console.log(response);
      if (response.status === 200) {
        toast.success("LOGIN SUCCESSFULLY");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(rememberMe);

        if (rememberMe) {
          localStorage.setItem("email", response.data.user.email);
        } else {
          localStorage.removeItem("email");
        }

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.err, { autoClose: 9000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex items-center justify-between my-6">
              <div className="flex gap-1.5 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-[20px] w-[20px] rounded-sm bg-green-500"
                  value={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p className="text-sm text-red-500">Forgot Password</p>
            </div>
            <button
              type="submit"
              className="custom-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in...." : "Sign In"}
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
