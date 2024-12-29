import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Data Fetching Wajahat Ali. All rights
          reserved.
        </p>

        <div className="mt-4 sm:mt-0 flex space-x-6">
          <a
            href="https://www.instagram.com/_wajo41_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/wajahat-ali-3189862b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
