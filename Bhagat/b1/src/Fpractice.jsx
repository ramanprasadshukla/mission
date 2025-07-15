import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// Get the current year dynamically
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-[#1a3a7c] text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div>
          <img
            src="/src/Aastha_logo.png"
            alt="Aastha Vidyalaya Logo"
            className="w-24 h-24 mb-4 hover:scale-105 transition-transform duration-300 mx-auto md:mx-0"
          />
          <p className="text-sm">Last Updated: July 14, 2025</p>
          <p className="text-sm mt-2">
            Visitor:{" "}
            <span className="bg-black px-3 py-1 rounded text-white font-semibold text-base tracking-wider shadow">
              1320582
            </span>
          </p>
          {/* Social Icons */}
          <div className="flex gap-5 mt-5 text-2xl">
            <a
              href="https://facebook.com/YOUR_FACEBOOK_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/YOUR_INSTAGRAM_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/YOUR_CHANNEL_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Digital India Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white/25 pb-1">Digital India</h3>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="hover:underline hover:text-blue-200 transition">About Us</a>
            </li>
            <li>
              <a href="/initiatives" className="hover:underline hover:text-blue-200 transition">Initiatives</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline hover:text-blue-200 transition">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white/25 pb-1">Useful Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/events" className="hover:underline hover:text-blue-200 transition">Events</a>
            </li>
            <li>
              <a href="/press-release" className="hover:underline hover:text-blue-200 transition">Press Release</a>
            </li>
            <li>
              <a href="/videos" className="hover:underline hover:text-blue-200 transition">Videos</a>
            </li>
            <li>
              <a href="/digipehal" className="hover:underline hover:text-blue-200 transition">Digiपहल</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white/25 pb-1">Contact Us</h3>
          <p>India, Chhattisgarh</p>
          <p>Dantewada, Geegam (Jawanga), 494441</p>
          <p>Aastha Vidy Mandir Jawanga</p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:webmaster@digitalindia.gov.in"
              className="underline hover:text-blue-200 transition"
            >
              webmaster@digitalindia.gov.in
            </a>
          </p>
        </div>
      </div>

      {/* Important Links */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-5 text-center border-b border-white/30 pb-2 mx-auto w-fit">Important Links</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/ministri of Education.png"
              alt="Ministry of Education"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow-sm p-1"
            />
          </a>
          <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/nic.svg"
              alt="NIC"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow-sm p-1"
            />
          </a>
          <a href="https://navgurukul.org/campus/Dantewada" target="_blank" rel="noopener noreferrer">
            <img
              src="src/Nglogo.png"
              alt="Navgurukul"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow-sm p-1"
            />
          </a>
          <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/digital_india.png"
              alt="Digital India"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow-sm p-1"
            />
          </a>
          <a href="https://dantewada.nic.in/en/education/" target="_blank" rel="noopener noreferrer">
            <img
              src="src/dnt_logo.png"
              alt="Education District Dantewada"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded shadow-sm p-1"
            />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        <p>
          © {year} - Copyright Ministry of Electronics & IT, Government of India.
          All rights reserved.
        </p>
        <p className="mt-1">
          The information on this website is sourced from publicly available domains.
        </p>
        <div className="mt-4 flex justify-center gap-8 text-sm flex-wrap">
          <a
            className="hover:underline hover:text-blue-200 transition cursor-pointer"
            href="/terms"
          >
            Terms and Conditions
          </a>
          <a
            className="hover:underline hover:text-blue-200 transition cursor-pointer"
            href="/feedback"
          >
            Feedback
          </a>
        </div>
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 bg-transparent text-blue-200 hover:bg-blue-800 hover:text-white border border-blue-300 px-4 py-1 rounded transition"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
