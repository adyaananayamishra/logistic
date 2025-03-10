import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "15K+", label: "Happy Customers" },
    { number: "30K+", label: "Successful Deliveries" },
    { number: "50+", label: "Top-rated Sellers" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6 md:px-16">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Elite Performance</h2>

        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-200 rounded-2xl shadow-lg text-center hover:bg-gray-300 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
