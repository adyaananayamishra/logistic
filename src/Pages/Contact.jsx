
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6">Get In Touch!!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" rows="4"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
        </form>
      </div>

      <div className="bg-blue-100 p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-4">Feel free to reach out to us!</p>
        <div className="mb-4">
          <p className="flex items-center"><span className="mr-2">📍</span> BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007.</p>
          <p className="flex items-center"><span className="mr-2">📞</span> +91-8240742313</p>
          <p className="flex items-center"><span className="mr-2">💬</span> +91-9040170727</p>
          <p className="flex items-center"><span className="mr-2">📧</span> info@firsttrack.site</p>
        </div>

        <h3 className="text-lg font-semibold mb-2">Follow Us On:</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 text-2xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-pink-600 text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-blue-400 text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-red-600 text-2xl"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-blue-800 text-2xl"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
