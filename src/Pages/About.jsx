import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
    
      <div className="relative w-full h-[300px] md:h-[400px] mt-25"> 
        <img
          src="/assets/about.jpg" 
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-3">
              </div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver the best logistics solutions with unparalleled customer service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-green-600 mb-3">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              Connecting the world through fast, reliable, and efficient shipping services.
            </p>
          </div>

          {/* Values */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-yellow-600 mb-3">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, and customer-first solutions in every delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

