import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="bg-blue-300 text-white py-10 px-6 text-center">
      <h2 className="text-2xl font-bold">Stay Updated </h2>
      <p className="mt-2 text-lg">
        Subscribe to our newsletter and get the latest updates on logistics and shipping.
      </p>
      <div className="mt-6 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full p-3 text-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full bg-blue-500 mt-4 p-3 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
