import React from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Pinterest,
  Twitter,
  CircleUserRound,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-20 py-14 text-sm">
      <div className="grid md:grid-cols-4 gap-10 md:gap-20">
        {/* OUR COMPANY */}
        <div>
          <h3 className="font-bold mb-4 text-white">OUR COMPANY</h3>
          <ul className="space-y-2 text-gray-300">
            <li>ABOUT ARTEMEST</li>
            <li>CONTACT US</li>
            <li>AFFILIATION</li>
            <li>CAREERS</li>
            <li>ARTEMEST GALLERIA</li>
            <li>OUR OFFICES</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold mb-4 text-white">SERVICES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>TRADE PROGRAM</li>
            <li>ARTEMEST CONTRACT</li>
            <li>INTERIOR PROJECTS</li>
            <li>DESIGN SERVICE</li>
            <li>ORDERING ON ARTEMEST</li>
            <li>SHIPPING & RETURNS</li>
            <li>ACCESSIBILITY SUPPORT</li>
            <li>SITEMAP</li>
          </ul>
        </div>

        {/* LEGAL AREA */}
        <div>
          <h3 className="font-bold mb-4 text-white">LEGAL AREA</h3>
          <ul className="space-y-2 text-gray-300">
            <li>PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
            <li>COOKIES PREFERENCES</li>
            <li>TERMS AND CONDITIONS OF SALE</li>
            <li>TERMS AND CONDITIONS OF SALE - TRADE</li>
            <li>COUNTRY AND LANGUAGE SETTINGS</li>
            <li>WHISTLEBLOWING</li>
          </ul>
        </div>

        {/* NEWSLETTER & SOCIAL */}
        <div>
          <h3 className="font-bold mb-4 text-white">SIGN UP FOR OUR NEWSLETTER</h3>
          <div className="flex w-full mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-3 py-2 text-black"
            />
            <button className="bg-[#c5a46d] text-white px-5 py-2 font-semibold">
              SIGN UP
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            I agree to the processing of my personal data to receive promotional messages about Artemest.{" "}
            <span className="underline text-[#c5a46d]">Read our privacy policy</span>
          </p>

          <h3 className="font-bold text-white mb-2">CONTACT US</h3>
          <div className="flex space-x-4 mb-6">
            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
              <Phone />
            </div>
            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
              <Mail />
            </div>
          </div>

          <h3 className="font-bold text-white mb-2">FOLLOW US</h3>
          <div className="flex flex-wrap gap-3">
            <IconWrapper><Instagram /></IconWrapper>
            <IconWrapper><Facebook /></IconWrapper>
            <IconWrapper><CircleUserRound className="scale-90" /></IconWrapper> {/* TikTok placeholder */}
            <IconWrapper><Linkedin /></IconWrapper>
            <IconWrapper><Pinterest /></IconWrapper>
            <IconWrapper><Twitter /></IconWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
};

const IconWrapper = ({ children }) => (
  <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
    {children}
  </div>
);

export default Footer;
