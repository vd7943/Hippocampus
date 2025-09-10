import React from "react";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const location = [
  {
    title: "India",
    address: "226, Sky View, Near Shyamdham, Kamrej Road, Surat",
  },
  {
    title: "Australia",
    address: "40, Saunders ST., Muirhead, NT, Darwin, Australia.",
  },
  {
    title: "Canada",
    address: "505, 4th Avenue, SW, Calgary, Canada",
  },
  {
    title: "London",
    address: "24, Grove way, Wembley, HA9 6JT, London",
  },
  {
    title: "USA",
    address: "239, Beacon Avenue, Jersey City, New Jersey, USA",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0D0E0C] text-white rounded-t-2xl px-6 lg:px-20 pt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-30 border-b border-[#2C2C2C] pb-10 lg:px-8">
        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Services</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="">Aadhaar AUA / KUA Platform</li>
            <li className="">Aadhaar ASA / KSA Platform</li>
            <li className="">Aadhaar Data Vault</li>
            <li className="">Aadhaar Masking</li>
            <li className="">Integrated Offline KYC Solution</li>
            <li className="">Video KYC Solution</li>
            <li className="">
              Automated ID Identification And Data Retrieval (AIIR)
            </li>
            <li className="">OVD Validation</li>
            <li className="">eSign Gateway</li>
            <li className="">Paperless Customer Onboarding</li>
            <li className="">Custom Software Development</li>
            <li className="">OSigner</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Solutions</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="">Account Opening</li>
            <li className="">Account Modifications</li>
            <li className="">Digilocker Application</li>
            <li className="">OCR API Solutions</li>
            <li className="">AI & ML Solutions</li>
            <li className="">NLP Solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Resources</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="">Hospitals</li>
            <li className="">Hotels</li>
            <li className="">Insurance</li>
            <li className="">Pharma/Healthcare</li>
            <li className="">Real Estate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Company</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li>
              <Link to="/about-us" className="hover:underline cursor-pointer">
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/how-we-work"
                className="hover:underline cursor-pointer"
              >
                How we Work
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 text-[14px]">
        {location.map((loc) => (
          <div key={loc.title}>
            <h4 className="font-bold text-lg mb-2">{loc.title}</h4>
            <p>{loc.address}</p>
            <a
              href="mailto:contact@amiinofotech.com"
              className="mt-1 underline"
            >
              contact@amiinofotech.com
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-10 lg:pt-0 flex flex-col lg:flex-row justify-between items-center border-t border-[#2C2C2C] gap-6">
        <div className="flex gap-4 text-white text-xl lg:text-2xl">
          <FaLinkedinIn className="hover:text-[#0077b5] hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaXTwitter className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-[#E1306C] hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaEnvelope className="hover:text-[#ea4335] hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>

        <div className="flex gap-2 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms and condition
          </a>
        </div>

        <div className="flex items-center text-white text-3xl font-medium">
          <img src="/footer-logo.png" alt=" Amiinfotech" />
          Amiinfotech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
