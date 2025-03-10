import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative h-[500px] w-full bg-gray-700">
        <img
          src="/assets/banner.jpg"
          alt="Logistics"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-16">
        <div className="max-w-lg">
          <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight">
            RELIABLE & EFFICIENT <br />
            <span className="text-yellow-400">LOGISTICS SOLUTIONS</span>
          </h1>
          <p className="text-black font-bold mt-4 text-lg opacity-90">
            We ensure safe, reliable, and efficient delivery across the globe.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition">
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-medium border border-blue-900 hover:bg-blue-100 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
