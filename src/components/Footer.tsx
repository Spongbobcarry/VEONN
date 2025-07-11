// src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Brief */}
        <div className="flex flex-col items-center md:items-start">
          {/* Updated: use logo-footer.png */}
          <img
            src="/veonn1.jpg"
            alt="Veonn Logo"
            className="h-14 mb-4"
          />
          <p className="text-sm text-gray-300">
            Veonn is a minimalist fashion brand dedicated to craftsmanship, quality, and elegance. Curated collections for the discerning individual.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#categories" className="hover:underline">
                Categories
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <ul className="flex space-x-6 mb-4">
            <li>
              <a
                href="https://www.instagram.com/middlemen.ca/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80">
                Twitter
              </a>
            </li>
          </ul>
          <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg text-gray-800 flex-grow focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Veonn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
