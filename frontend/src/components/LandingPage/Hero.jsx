import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import Logout from "../../Auth/Logout";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authUser] = useAuth();

  return (
    <div
      className="min-h-screen bg-cover bg-center text-[#FFFFFF] flex flex-col justify-between"
      style={{
        backgroundImage: "url('/hero-background.png')",
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-8 py-6 relative z-20">
        <img
          src="/logo.png"
          alt="Hippocampus Infotech Logo"
          className="h-8 md:h-14"
        />

        <nav className="hidden md:flex items-center gap-18 text-[#FFFFFF]">
          <a href="#services" className="hover:underline">
            SERVICES
          </a>
          <a href="#solutions" className="hover:underline">
            SOLUTIONS
          </a>
          <a href="#company" className="hover:underline">
            COMPANY
          </a>
        </nav>
        {authUser ? (
          <Logout />
        ) : (
          <Link
            to="/login"
            className="hidden md:block cursor-pointer ml-4 px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
          >
            Login
          </Link>
        )}

        <a
          href="#contact"
          className="hidden md:block cursor-pointer ml-4 px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
        >
          CONTACT US
        </a>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#12123B] bg-opacity-95 text-white flex flex-col items-center space-y-6 py-6 z-10 md:hidden">
          <a
            href="#services"
            className="text-lg hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </a>
          <a
            href="#solutions"
            className="text-lg hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            SOLUTIONS
          </a>
          <a
            href="#company"
            className="text-lg hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            COMPANY
          </a>
          {authUser ? (
            <Logout />
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
            >
              Login
            </Link>
          )}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
          >
            CONTACT US
          </a>
        </div>
      )}

      <div className="flex-1 flex flex-col lg:justify-center px-6 md:px-38 max-w-6xl my-10 lg:my-14">
        <h1 className="text-4xl md:text-6xl font-bold leading-none mb-4">
          Business <br /> automation <br />
          <span className="font-light text-5xl">for enterprises</span>
        </h1>

        <p className="text-base md:text-[19px] font-light max-w-4xl mb-8 leading-tight tracking-wider">
          At Hippocampus Infotech, we are a technology-driven company committed
          to delivering secure, scalable, and intelligent digital solutions
          across various industries. With a strong foundation in identity
          management, AI/ML integration, and enterprise automation, we empower
          businesses to digitize operations, enhance compliance, and drive
          innovation.
          <br />
          From banking and finance to healthcare, e-commerce, and government-led
          digital initiatives, our expertise lies in simplifying complex
          workflows through customized platforms and cutting-edge technologies.
          Our team specializes in secure KYC systems, Aadhaar and MOSIP
          integrations, OCR solutions, eSign platforms, and AI-powered
          automation, all designed to help businesses operate faster and
          smarter.
        </p>

        <a
          href="#contact"
          className="w-fit bg-[#D9D9D9] text-[#12123B] text-md px-6 py-2 rounded-full cursor-pointer hover:opacity-90"
        >
          GET A FREE QUOTE
        </a>
      </div>
    </div>
  );
};

export default Hero;
