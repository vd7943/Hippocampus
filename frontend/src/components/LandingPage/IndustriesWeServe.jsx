import React from "react";

const industries = [
  { image: "/industries-9.png" },
  { image: "/industries-8.png" },
  { image: "/industries-6.png" },
  { image: "/industries-3.png" },
  { image: "/industries-7.png" },
  { image: "/industries-5.png" },
  { image: "/industries-2.png" },
  { image: "/industries-4.png" },
  { image: "/industries-1.png" },
];

const IndustriesWeServe = () => {
  return (
    <section className="relative bg-[#01010D] text-white pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto relative pt-20 border-t border-[#2C2C2C] text-center lg:text-start">
        <div className="absolute left-4 top-10 lg:top-auto lg:bottom-[-30px] lg:left-0 z-10 p-0 md:p-8">
          <p className="uppercase text-sm text-[#FFFFFF] mb-2 tracking-widest font-medium">
            Enhance your industry with us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-wide">
            Industries we served <br /> solutions
          </h2>
        </div>

        <div
          id="solutions"
          className="flex flex-col items-end mt-24 lg:mt-0 gap-6 lg:gap-0"
        >
          <div className="flex flex-wrap gap-6">
            {industries.slice(0, 4).map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.label}
                className="w-36 h-28 lg:h-38 lg:w-52 object-contain"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            {industries.slice(4, 7).map((item, index) => (
              <img
                key={index + 4}
                src={item.image}
                alt={item.label}
                className="w-36 h-28 lg:h-38 lg:w-52 object-contain"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            {industries.slice(7, 9).map((item, index) => (
              <img
                key={index + 7}
                src={item.image}
                alt={item.label}
                className="w-37 h-28 lg:h-38 lg:w-52 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
