import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import Logout from "../../Auth/Logout";
import AddHeroContent from "../AdminPanel/AddHeroContent";
import EditHeroContent from "../AdminPanel/EditHeroContent";
import axios from "axios";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authUser] = useAuth();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [heroContent, setHeroContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = authUser?.role === "Admin";

  const fetchHeroContent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/hero/get`
      );
      if (res.data) {
        setHeroContent(res.data);
      }
    } catch (error) {
      console.error("Error fetching hero content:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroContent();
  }, []);

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
          <Logout className="hidden md:block cursor-pointer" />
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
        {loading ? (
          <div className="animate-pulse space-y-4 pb-10">
            <div className="h-10 bg-gray-300 rounded w-3/4"></div>
            <div className="h-10 bg-gray-300 rounded w-2/4"></div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        ) : (
          heroContent && (
            <>
              <h1 className="text-4xl md:text-6xl font-bold leading-none mb-4">
                {heroContent.title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>

              <p className="text-base md:text-[19px] font-light max-w-4xl mb-8 leading-tight tracking-wider">
                {heroContent.description1}
                <br />
                {heroContent.description2}
              </p>
            </>
          )
        )}

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 space-x-3">
          <a
            href="#contact"
            className="w-fit bg-[#D9D9D9] text-[#12123B] text-md px-6 py-2 rounded-full cursor-pointer hover:opacity-90"
          >
            GET A FREE QUOTE
          </a>
          {isAdmin && (
            <>
              {!heroContent && (
                <button
                  onClick={() => setIsAddOpen(true)}
                  className="w-fit bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-full hover:opacity-90"
                >
                  Add Content
                </button>
              )}
              {heroContent && (
                <button
                  onClick={() => setIsEditOpen(true)}
                  className="w-fit cursor-pointer bg-green-600 text-white px-4 py-2 rounded-full hover:opacity-90"
                >
                  Edit Content
                </button>
              )}
            </>
          )}
        </div>
        <AddHeroContent
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
        />
        <EditHeroContent
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onUpdate={fetchHeroContent}
        />
      </div>
    </div>
  );
};

export default Hero;
