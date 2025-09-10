import React from "react";
import { FiChevronRight } from "react-icons/fi";

const services = [
  {
    title: "Aadhaar Solutions",
    points: [
      "Aadhaar AUA / KUA Platform",
      "Aadhaar ASA / KSA Platform",
      "Aadhaar Data Vault",
      "Aadhaar Masking",
      "Integrated Offline KYC Solution",
      "Video KYC Solution",
    ],
  },
  {
    title: "KYC & Identity Solutions",
    points: [
      "Automated ID Identification And Data Retrieval (AIIR)",
      "OVD Validation",
      "eSign Gateway",
      "Paperless Customer Onboarding",
    ],
  },
  {
    title: "MOSIP Solutions",
    points: [
      "MOSIP KYC & Auth Engine",
      "MOSIP based eSign Platform",
      "MOSIP KYC Platform integrated with IRIS embedded handset",
      "MOSIP Video KYC Solution",
      "MOSIP IVR KYC Solution",
      "MOSIP Based Student ID Validation Platform",
    ],
  },
  {
    title: "Other Software Solutions",
    points: [
      "Custom Software Development",
      "OSigner",
      "Biometric Wrapper Application",
    ],
  },
];

const OurServices = () => {
  return (
    <section className="relative z-10 bg-[#01010D] pt-16 px-6 lg:px-0">
      <div id="services" className="text-center mb-12">
        <p className="text-[#FFFFFF] text-sm tracking-widest font-medium">
          DEEP TECH EXPERTISE AND STRONG R&D
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-2 lg:mt-6">
          Our services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden lg:h-[380px]">
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
                    <FiChevronRight className="w-3 h-3 flex-shrink-0 mt-1" />
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
