import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-40">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Homii</h3>
          <p className="text-gray-400 text-sm">
            Your trusted partner in finding the best real estate deals and
            properties that fit your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mb-2">
              <a href="/search">Properties</a>
            </li>
          </ul>
        </div>

        {/* Social Media Handles */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            <i className="fas fa-map-marker-alt"></i> 123 Real Estate St., New
            Delhi, India
          </p>
          <p className="text-gray-400 text-sm mb-2">
            <i className="fas fa-phone"></i> +91-123-456-7890
          </p>
          <p className="text-gray-400 text-sm">
            <i className="fas fa-envelope"></i> homii@realestateco.com
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Homii Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
