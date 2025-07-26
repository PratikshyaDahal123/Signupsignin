// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Our Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Decorish</li>
            <li>Contact Us</li>
            <li>Affiliation</li>
            <li>Careers</li>
            <li>Decorish Galleria</li>
            <li>Our Offices</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Trade Program</li>
            <li>Decorish Contract</li>
            <li>Interior Projects</li>
            <li>Design Service</li>
            <li>Ordering on Decorish</li>
            <li>Shipping & Returns</li>
            <li>Accessibility Support</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Legal Area */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Legal Area</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Cookies Preferences</li>
            <li>Terms and Conditions of Sale</li>
            <li>Terms and Conditions of Sale - Trade</li>
            <li>Country and Language Settings</li>
            <li>Whistleblowing</li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Sign up for our newsletter</h3>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#b29159] text-white px-4 py-2 rounded-r-md">Sign Up</button>
          </form>
          <p className="text-xs text-gray-400 mb-6">
            I agree to the processing of my personal data to receive promotional messages about Decorish.{" "}
            <a href="#" className="underline text-[#b29159]">Read our privacy policy</a>
          </p>

          {/* Contact Icons */}
          <h4 className="uppercase text-sm font-semibold mb-3">Contact Us</h4>
          <div className="flex items-center gap-4 mb-6">
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              📞
            </button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              ✉️
            </button>
          </div>

          {/* Social Icons */}
          <h4 className="uppercase text-sm font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">📷</button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">👍</button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">🎵</button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">💼</button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">📌</button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">❌</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
