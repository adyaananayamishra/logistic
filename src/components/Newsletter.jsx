import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-12 px-8 text-center rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold">Stay Updated</h2>
      <p className="mt-3 text-lg opacity-90">
        Subscribe to our newsletter and get the latest updates on logistics and shipping.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-2/3 p-3 text-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-300 outline-none shadow-sm"
        />
        <button className="w-full sm:w-auto bg-white text-blue-600 font-semibold py-3 px-6 rounded-md hover:bg-blue-100 transition shadow-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;