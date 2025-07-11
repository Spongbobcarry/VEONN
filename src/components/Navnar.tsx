import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo (white) */}
        <img
          src="/veonn1.jpg"
          alt="Veonn Logo"
          className="h-16 w-auto"
        />
      </div>

      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li>
          <a href="#categories" className="hover:opacity-80">
            Categories
          </a>
        </li>
        <li>
          <a href="#products" className="hover:opacity-80">
            Shop
          </a>
        </li>
        <li>
          <a href="#about" className="hover:opacity-80">
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:opacity-80"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
