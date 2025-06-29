import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* 🔘 Pill Navbar */}
      <nav className="bg-white/10 backdrop-blur-md shadow-lg px-10 py-5 rounded-full flex gap-8 items-center text-white font-medium text-sm">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
        <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
