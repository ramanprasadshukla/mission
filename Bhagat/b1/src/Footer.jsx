import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1a3a7c] text-white py-8 px-4 md:px-16">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/src/Aastha_logo.png"
            alt="Aastha Vidyalaya Logo"
            className="w-24 h-24 mb-4 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm">Last Updated: July 14, 2025</p>
          <p className="text-sm mt-2">
            Visitor:{" "}
            <span className="bg-black px-2 py-1 rounded text-white">1320582</span>
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="https://facebook.com/YOUR_FACEBOOK_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href="https://instagram.com/YOUR_INSTAGRAM_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="hover:text-blue-300 transition-colors duration-200" />
            </a>
            <a
              href="https://youtube.com/YOUR_CHANNEL_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-red-500 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Digital India</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Initiatives</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li>Events</li>
            <li>Press Release</li>
            <li>Videos</li>
            <li>Digiपहल</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>india, chhattisgarh</p>
          <p>Dantewada, geegam (jawanga), 494441</p>
          <p>Aastha Vidy mandir jawanga</p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:webmaster@digitalindia.gov.in"
              className="underline"
            >
              webmaster@digitalindia.gov.in
            </a>
          </p>
        </div>
      </div>

      {/* Important Links */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">Important Links</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/ministri of Education.png"
              alt="Ministry of Education"
              className="h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/nic.svg"
              alt="NIC"
              className="h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://navgurukul.org/campus/Dantewada" target="_blank" rel="noopener noreferrer">
            <img
              src="src/Nglogo.png"
              alt="Navgurukul"
              className="h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/digital_india.png"
              alt="Chhattisgarh Education"
              className="h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://dantewada.nic.in/en/education/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/dnt_logo.png"
              alt="Education District Dantewada"
              className="h-12 w-3% hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t pt-4 text-center text-sm">
        <p>
          © 2024 - Copyright Ministry of Electronics & IT, Government of India.
          All rights reserved.
        </p>
        <p className="mt-1">
          The information on this website is sourced from publicly available
          domains.
        </p>
        <div className="mt-4 flex justify-center gap-8 text-sm flex-wrap">
          <span className="hover:underline cursor-pointer">
            Terms and Conditions
          </span>
          <span className="hover:underline cursor-pointer">Feedback</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
