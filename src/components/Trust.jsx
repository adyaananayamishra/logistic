import React from "react";
import { CheckCircle, ShieldCheck, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle size={40} className="text-blue-500" />,
      title: "Trusted Quality",
      description: "We ensure top-notch service with industry-leading standards.",
    },
    {
      icon: <ShieldCheck size={40} className="text-green-500" />,
      title: "Safe & Secure",
      description: "Your goods are handled with care and delivered securely.",
    },
    {
      icon: <Clock size={40} className="text-yellow-500" />,
      title: "Fast & On Time",
      description: "Timely delivery is our priority to keep your business running smoothly.",
    },
    {
      icon: <Headphones size={40} className="text-red-500" />,
      title: "Dedicated Support",
      description: "Our team is available 24/7 to assist you with any queries.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Why Choose Us</h2>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition transform hover:scale-105"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
