import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign in <span className="text-green-600"></span> to your account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email address</label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Sign in
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center justify-center my-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-600">
          New User?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Create a new account!
          </Link>
        </p>
      </div>
    </div>
  );
}
