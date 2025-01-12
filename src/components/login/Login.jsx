import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/dashboard"  />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;

    try {
      let response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log(response.data.accessToken);
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("Xato");
    }
  };

  return (
    <div className="bg-indigo-600 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            className="px-4 py-3 border border-gray-300 rounded-md outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            className="px-4 py-3 border border-gray-300 rounded-md outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="flex  justify-center items-center mt-4 gap-2">
          <p className="text-center text-sm  text-gray-600">
            Don't have an account?
          </p>
          <p className="text-indigo-500 hover:underline">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
