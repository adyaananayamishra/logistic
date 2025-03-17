import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
        {/* Logo and About */}
        <div className="text-left">
          <img src="/assets/logo.jpg" alt="logo" className="w-24 mb-4 rounded-lg shadow-lg" />
          <p className="text-sm leading-relaxed">
            Adya Express delivers fast, reliable, and seamless logistics solutions, ensuring timely and secure shipments worldwide.
          </p>
          <a href="/about">
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              About Us
            </button>
          </a>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg text-white mb-3">Contact Us</h3>
          <p className="text-sm">Sundargarh, Rourkela, 770001</p>
          <p className="text-sm mt-2">📞 +91-0123456789</p>
          <p className="text-sm">📱 +91-0123456789</p>
          <p className="text-sm">✉ info@adyaexpress.com</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg text-white mb-3">Our Services</h3>
          <ul className="text-sm space-y-2">
            <li>✔ Pick & Drop</li>
            <li>✔ Packaging</li>
            <li>✔ International & Domestic Services</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="font-semibold text-lg text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-3 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 mt-8 text-sm">
        <p>
          Copyright © 2025 Developed By<strong className="text-white"> First Track Solution Technologies</strong>
        </p>
        <p className="space-x-4">
          <Link to="/" className="hover:underline text-gray-400">Home</Link>
          <Link to="/contact" className="hover:underline text-gray-400">Contact Us</Link>
          <Link to="/about" className="hover:underline text-gray-400">About Us</Link>
          <Link to="/privacy-policy" className="hover:underline text-gray-400">Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:underline text-gray-400">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
