import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100 mt-25">
      {/* Background Image */}
      <div className="relative h-[400px] w-full">
        <img
          src="/assets/banner2.jpg"
          alt="Logistics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-lg space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            RELIABLE & EFFICIENT <br />
            <span className="text-yellow-400">LOGISTICS SOLUTIONS</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl opacity-90 drop-shadow-sm">
            We ensure safe, reliable, and efficient delivery across the globe.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/get-started")}
              className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-shadow shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold border-2 border-blue-900 hover:bg-blue-100 transition-shadow shadow-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
