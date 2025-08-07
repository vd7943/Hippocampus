import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

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
            <li className="hover:underline cursor-pointer">
              Blockchain development
            </li>
            <li className="hover:underline cursor-pointer">NFT development</li>
            <li className="hover:underline cursor-pointer">
              Metaverse development
            </li>
            <li className="hover:underline cursor-pointer">DeFi development</li>
            <li className="hover:underline cursor-pointer">Dapp development</li>
            <li className="hover:underline cursor-pointer">
              Blockchain consulting
            </li>
            <li className="hover:underline cursor-pointer">
              Blockchain training
            </li>
            <li className="hover:underline cursor-pointer">Smart contracts</li>
            <li className="hover:underline cursor-pointer">Integrations</li>
            <li className="hover:underline cursor-pointer">NFT launchpads</li>
            <li className="hover:underline cursor-pointer">
              DeFi staking platforms
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Solutions</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="hover:underline cursor-pointer">NFT</li>
            <li className="hover:underline cursor-pointer">Supply chain</li>
            <li className="hover:underline cursor-pointer">IoT</li>
            <li className="hover:underline cursor-pointer">Healthcare</li>
            <li className="hover:underline cursor-pointer">Cannabis</li>
            <li className="hover:underline cursor-pointer">Automotive</li>
            <li className="hover:underline cursor-pointer">Real estate</li>
            <li className="hover:underline cursor-pointer">Insurance</li>
            <li className="hover:underline cursor-pointer">Loyalty programs</li>
            <li className="hover:underline cursor-pointer">Logistics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">
            Technologies
          </h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="hover:underline cursor-pointer">Ethereum</li>
            <li className="hover:underline cursor-pointer">Binance</li>
            <li className="hover:underline cursor-pointer">Solana</li>
            <li className="hover:underline cursor-pointer">Tron</li>
            <li className="hover:underline cursor-pointer">Hyperledger</li>
            <li className="hover:underline cursor-pointer">Graphene</li>
            <li className="hover:underline cursor-pointer">Corda</li>
            <li className="hover:underline cursor-pointer">EOS</li>
            <li className="hover:underline cursor-pointer">Front-end</li>
            <li className="hover:underline cursor-pointer">React</li>
            <li className="hover:underline cursor-pointer">Java</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg lg:text-2xl font-semibold mb-10">Company</h3>
          <ul className="space-y-5 text-md text-[#FFFFFF]">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">How we Work</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Partnership</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 text-[14px]">
        {location.map((loc) => (
          <div key={loc.title}>
            <h4 className="font-bold text-lg mb-2">{loc.title}</h4>
            <p>{loc.address}</p>
            <p className="mt-1 underline">contact@amiinofotech.com</p>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-10 lg:pt-0 flex flex-col lg:flex-row justify-between items-center border-t border-[#2C2C2C] gap-6">
        <div className="flex gap-4 text-white text-xl lg:text-2xl">
          <FaLinkedinIn className="hover:text-[#0077b5] hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300 cursor-pointer" />
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
