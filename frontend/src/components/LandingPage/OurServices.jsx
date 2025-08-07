import React from "react";
import { FiChevronRight } from "react-icons/fi";

const services = [
  {
    title: "Blockchain",
    points: [
      "Blockchain development",
      "Defi development",
      "Dapp development",
      "Blockchain consulting",
      "Smart contracts",
    ],
  },
  {
    title: "Web 3.0",
    points: ["NFT development", "NFT launchpads", "DeFi staking plateforms"],
  },
  {
    title: "Metaverse",
    points: [
      "Metaverse development",
      "Metaverse NFT marketplace",
      "Metaverse application",
      "Metaverse games",
      "Metaverse real estate",
    ],
  },
  {
    title: "Web 2.0",
    points: ["UI/UX design", "web development"],
  },
];

const OurServices = () => {
  return (
    <section className="relative z-10 bg-[#01010D] pt-16 px-6 lg:px-0">
      <div className="text-center mb-12">
        <p className="text-[#FFFFFF] text-sm tracking-widest font-medium">
          DEEP TECH EXPERTISE AND STRONG R&D
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-2 lg:mt-6">
          Our services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden lg:h-[360px]">
            <img
              src="/services-background.png"
              alt="card bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative top-10 left-12 z-10 bg-black/80 p-6 w-[250px] min-h-[350px] flex flex-col backdrop-blur-lg rounded-3xl pt-12">
              <h3 className="text-[#C4C6CC] text-2xl font-medium mb-4">
                {service.title}
              </h3>
              <ul className="text-[#C4C6CC] space-y-4 text-[13px]">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiChevronRight className="mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
