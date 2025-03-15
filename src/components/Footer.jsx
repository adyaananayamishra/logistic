// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-black pt-10">
//       <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Logo and About */}
//         <div>
//           <img src="/assets/logo.jpg" alt="logo" className="w-20 mb-3" />
//           <p className="text-sm">
//             First Track delivers fast, reliable, and seamless logistics solutions, ensuring timely and secure shipments worldwide.
//           </p>
//           <Link to="/about">
//             <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ">
//              About Us
//            </button>
//           </Link>
//         </div>

//         {/* Contact Us */}
//         <div>
//           <h3 className="font-semibold text-lg">Contact Us</h3>
//           <p className="text-sm">BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha-751007</p>
//           <p className="text-sm">📞 +91-8240742313</p>
//           <p className="text-sm">📱 +91-9040170727</p>
//           <p className="text-sm">✉ info@firsttrack.site</p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="font-semibold text-lg">Our Services</h3>
//           <ul className="text-sm">
//             <li>Pick & Drop</li>
//             <li>Packaging</li>
//             <li>International & Domestic Services</li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold text-lg">Quick Links</h3>
//           <ul className="text-sm">
//             <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
//             <li><Link to="/about" className="hover:underline">About Us</Link></li>
//             <li><Link to="/blog" className="hover:underline">Blog</Link></li>
//             <li><Link to="/privacy-policy" className="hover:underline">Privacy & Policy</Link></li>
//             <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
//           </ul>
//           <h3 className="font-semibold text-lg mt-4">Follow Us:</h3>
//           <div className="flex space-x-4 mt-2">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600"><i className="fab fa-facebook"></i></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400"><i className="fab fa-twitter"></i></a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600"><i className="fab fa-instagram"></i></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-800"><i className="fab fa-linkedin"></i></a>
//             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600"><i className="fab fa-youtube"></i></a>
//           </div>
//         </div>
//       </div>
//       <div className="bg-black text-white text-center py-4 mt-6">
//         <p>Copyright © 2024 <strong>Developed By First Track Solution Technologies</strong></p>
//         <p>
//           <Link to="/" className="hover:underline">Home</Link> | 
//           <Link to="/contact" className="hover:underline"> Contact Us</Link> | 
//           <Link to="/about" className="hover:underline"> About Us</Link> | 
//           <Link to="/privacy-policy" className="hover:underline"> Privacy Policy</Link> | 
//           <Link to="/terms-of-use" className="hover:underline"> Terms </Link>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
        {/* Logo and About */}
        <div className="text-center md:text-left">
          <img src="/assets/logo.jpg" alt="logo" className="w-24 mx-auto md:mx-0 mb-4 rounded-lg shadow-lg" />
          <p className="text-sm leading-relaxed">
            First Track delivers fast, reliable, and seamless logistics solutions, ensuring timely and secure shipments worldwide.
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
          <p className="text-sm">BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha-751007</p>
          <p className="text-sm mt-2">📞 +91-8240742313</p>
          <p className="text-sm">📱 +91-9040170727</p>
          <p className="text-sm">✉ info@firsttrack.site</p>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 text-center py-4 mt-8 text-sm">
        <p>Copyright © 2024 <strong className="text-white">First Track Solution Technologies</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
