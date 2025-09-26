import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Logout from "../Auth/Logout";

const HowWeWork = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authUser] = useAuth();
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const goToServices = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const goToSolutions = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("solutions");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const goToCompany = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("company");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-[#FFFFFF] flex flex-col justify-between"
      style={{
        backgroundImage: "url('/hero-background.png')",
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-8 py-6 relative z-20">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Hippocampus Infotech Logo"
            className="h-8 md:h-14"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-18 text-[#FFFFFF]">
          <button
            onClick={goToServices}
            className="hover:underline cursor-pointer"
          >
            SERVICES
          </button>
          <button
            onClick={goToSolutions}
            className="hover:underline cursor-pointer"
          >
            SOLUTIONS
          </button>
          <button
            onClick={goToCompany}
            className="hover:underline cursor-pointer"
          >
            COMPANY
          </button>
        </nav>
        {authUser ? (
          <Logout className="hidden md:block cursor-pointer" />
        ) : (
          <Link
            to="/login"
            className="hidden md:block cursor-pointer ml-4 px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
          >
            Login
          </Link>
        )}

        <button
          onClick={goToContact}
          className="hidden md:block cursor-pointer ml-4 px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
        >
          CONTACT US
        </button>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#12123B] bg-opacity-95 text-white flex flex-col items-center space-y-6 py-6 z-10 md:hidden">
          <button
            className="text-lg hover:underline"
            onClick={() => {
              setIsMenuOpen(false);
              goToServices();
            }}
          >
            SERVICES
          </button>
          <button
            className="text-lg hover:underline"
            onClick={() => {
              setIsMenuOpen(false);
              goToSolutions();
            }}
          >
            SOLUTIONS
          </button>
          <button
            className="text-lg hover:underline"
            onClick={() => {
              setIsMenuOpen(false);
              goToCompany();
            }}
          >
            COMPANY
          </button>

          <button
            onClick={goToContact}
            className="px-4 py-2 bg-[#D9D9D9] text-[#2D515C] rounded-full text-sm hover:opacity-90"
          >
            CONTACT US
          </button>
        </div>
      )}

      <div className="flex-1 flex flex-col lg:justify-center px-6 md:px-38 my-10 lg:my-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-none mb-4 lg:mb-10">
          How We Work
        </h1>

        <p className="text-base md:text-[19px] font-light mb-8 leading-tight tracking-wider">
          At <strong>Hippocampus Infotech</strong>, our approach combines
          innovation, collaboration, and precision. Every project begins with a
          deep understanding of client requirements, ensuring that solutions are
          tailored to specific business goals. From concept to deployment, our
          teams work in close alignment with stakeholders to deliver results
          that are not only efficient but also sustainable.
        </p>
        <p className="text-base md:text-[19px] font-light mb-8 leading-tight tracking-wider">
          Our process emphasizes transparency, agility, and quality at every
          stage. We adopt industry best practices, leverage cutting-edge
          technologies, and maintain continuous communication to keep clients
          informed. This structured yet flexible workflow ensures timely
          delivery, reliable performance, and long-term value creation for all
          our partners.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;

