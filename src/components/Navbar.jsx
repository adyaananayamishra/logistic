import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Heroicons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.jpg" alt="Logo" className="h-14 w-auto object-contain drop-shadow-md" />
         
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/tracking">Tracking</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/blogs">Blogs</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/pricing">Pricing</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8 text-gray-800" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-8 w-8 text-gray-800" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col p-4 space-y-4 text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/tracking" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Tracking</Link></li>
          <li><Link to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/blogs" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/pricing" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>

     
    
      
    </nav>
  );
}
