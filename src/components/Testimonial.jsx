import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amit",
      feedback:
        "First Track Express has been an absolute pleasure to work with. Professional, reliable, and timely!",
      image: "/assets/male.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Sneha",
      feedback:
        "Their global shipping services have helped expand my business. Truly world-class.",
      image: "/assets/female.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-green-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full"
            />
            <p className="italic text-gray-700 mt-4">"{testimonial.feedback}"</p>
            <p className="font-bold text-gray-900 mt-3">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
