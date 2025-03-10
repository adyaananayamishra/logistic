import React from "react";

const services = [
  {
    title: "Express Shipping",
    description: "Fast and secure global deliveries for businesses and individuals.",
    icon: "🚚",
  },
  {
    title: "Secure Warehousing",
    description: "State-of-the-art storage solutions ensuring safety and efficiency.",
    icon: "🏢",
  },
  {
    title: "Air Freight",
    description: "Reliable cargo transport with the fastest air routes.",
    icon: "✈️",
  },
  {
    title: "Supply Chain Solutions",
    description: "Optimized logistics with expert management services.",
    icon: "⚓",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
