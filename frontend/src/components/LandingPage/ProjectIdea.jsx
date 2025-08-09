import React from "react";

const ProjectIdea = () => {
  return (
    <section className="bg-[#01010D] text-white pb-12 lg:pb-0 pt-12 px-6 md:px-12">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-32 md:w-100 flex justify-center md:justify-start">
          <img
            src="/amiInfotech_logo.png"
            alt="AI Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left leading-relaxed tracking-wider">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a project idea?
          </h2>
          <p className="text-lg md:text-[22px] mb-6 max-w-xl">
            The best minds in the industry are ready to help you with a free
            consultation! Tell us about your future project, and we will get
            back to you shortly.
          </p>

          <a
            href="#contact"
            className="w-fit bg-[#D9D9D9] text-[#12123B] text-md px-6 py-3 rounded-full cursor-pointer hover:opacity-90"
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;
