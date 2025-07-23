import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaAngleRight,
// } from "react-icons/fa";

const year = new Date().getFullYear();

const usefulLinks = [
  [
    { label: "About This Website", href: "/about-website" },
    { label: "Terms of use", href: "/terms" },
    { label: "Website Policies", href: "/policies" },
    { label: "Site Map", href: "/sitemap" },
    { label: "Help", href: "/help" },
    { label: "Contact Us", href: "/contact" },
  ],
  [
    { label: "Feedback", href: "/feedback" },
    { label: "Web Information Manager", href: "/web-info-manager" },
    { label: "Chief Information Security Officer", href: "/ciso" },
    { label: "Recruitment", href: "/recruitment" },
  ],
];

function Footer() {
  return (
    <footer className="bg-[#1a3a7c] text-white py-4 px-4 md:px-12">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm md:text-base">
        {/* Logo and Social */}
        <div>
          <img
            src="/src/Aastha_logo.png"
            alt="Aastha Vidyalaya Logo"
            className="w-20 h-20 mb-2 hover:scale-105 transition-transform duration-300 mx-auto md:mx-0"
          />
          <p className="text-xs">Last Updated: July 14, 2025</p>
          <p className="text-xs mt-1">
            Visitor:{" "}
            <span className="bg-black px-2 py-0.5 rounded font-semibold tracking-wider shadow text-white">
              1320582
            </span>
          </p>
          <div className="flex gap-4 mt-3 text-xl justify-center md:justify-start">
            <a href="https://facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              {/* <FaFacebookF /> */}
            </a>
            <a href="https://instagram.com/YOUR_INSTAGRAM_PROFILE" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              {/* <FaInstagram /> */}
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noreferrer" className="hover:text-blue-300">
              {/* <FaLinkedinIn /> */}
            </a>
            <a href="https://youtube.com/YOUR_CHANNEL_LINK" target="_blank" rel="noreferrer" className="hover:text-red-500">
              {/* <FaYoutube /> */}
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-2">
          <h3 className="text-base font-semibold mb-1">Useful Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {usefulLinks.map((column, colIdx) => (
              <ul key={colIdx} className="space-y-1">
                {column.map((link) => (
                  <li key={link.href} className="flex items-center group">
                    {/* <FaAngleRight className="mr-1 group-hover:text-blue-300 transition-colors" /> */}
                    <a href={link.href} className="hover:underline hover:text-blue-200 transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-base font-semibold mb-1 border-b border-white/25 pb-0.5">
            Contact Us
          </h3>
          <p>India, Chhattisgarh</p>
          <p>Dantewada, Geegam (Jawanga), 494441</p>
          <p>Aastha Vidy Mandir Jawanga</p>
          <p className="mt-1 break-all">
            Email:{" "}
            <a href="mailto:aasthavidyamandirjawanga@gmail.com" className="underline hover:text-blue-200">
              aasthavidyamandirjawanga@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Important Links */}
      <div className="mt-8">
        <h3 className="text-lg text-center font-semibold border-b border-white/30 pb-1 mx-auto w-fit">
          Important Links
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          {[
            {
              href: "https://www.education.gov.in/",
              src: "src/ministri of Education.png",
              alt: "Ministry of Education",
            },
            {
              href: "https://www.nic.in/",
              src: "src/nic.svg",
              alt: "NIC",
            },
            {
              href: "https://navgurukul.org/campus/Dantewada",
              src: "src/Nglogo.png",
              alt: "Navgurukul",
            },
            {
              href: "https://www.digitalindia.gov.in/",
              src: "src/digital_india.png",
              alt: "Digital India",
            },
            {
              href: "https://dantewada.nic.in/en/education/",
              src: "src/dnt_logo.png",
              alt: "Education District Dantewada",
            },
          ].map((logo) => (
            <a key={logo.href} href={logo.href} target="_blank" rel="noreferrer">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain hover:scale-105 hover:shadow-md transition duration-200 bg-white rounded shadow-sm p-1"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-white/30 pt-3 text-center text-xs">
        <p>
          © {year} - Aasta vidya mandir Jawanga 
        </p>
        <p className="mt-0.5">
          The information on this website is sourced from publicly available domains.
        </p>
        <div className="mt-2 flex justify-center gap-6 flex-wrap">
          <a href="/terms" className="hover:text-blue-200 underline transition">
            Terms and Conditions
          </a>
          <a href="/feedback" className="hover:text-blue-200 underline transition">
            Feedback
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 text-xs bg-transparent text-blue-200 hover:bg-blue-700 hover:text-white border border-blue-300 px-3 py-0.5 rounded transition"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
