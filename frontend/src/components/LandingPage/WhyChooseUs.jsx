import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="company"
      className="py-12 lg:py-0 md:pb-10 text-[#000000] text-center"
    >
      <p className="text-[16px] tracking-wide uppercase font-semibold mb-4">
        Our expertise for your business
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-12 tracking-wide">
        Why choose us for successful digital transformation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16">
        <div>
          <img
            src="/choose-1.png"
            alt="Technology Experts"
            className="mx-auto mb-2 w-34 h-32"
          />
          <h3 className="text-xl lg:text-3xl font-medium mb-2">
            Technology experts
          </h3>
          <p className="text-lg font-medium leading-tight tracking-wide">
            We have hands-on experience with various blockchain and business
            automation projects, including the OLWay supply chain and logistics
            platform, the RPA solution, and others.
          </p>
        </div>

        <div>
          <img
            src="/choose-2.png"
            alt="Fully-fledged tech team"
            className="mx-auto mb-2 w-36 h-32"
          />
          <h3 className="text-xl lg:text-3xl font-medium mb-2">
            Fully-fledged tech team
          </h3>
          <p className="text-lg font-medium leading-tight tracking-wide">
            As a full-cycle development company that’s been around for years, we
            have the skill set to build literally any blockchain or process
            automation app all the way from business analysis to launch.
          </p>
        </div>

        <div>
          <img
            src="/choose-3.png"
            alt="Understanding your business"
            className="mx-auto mb-2 w-42 h-32"
          />
          <h3 className="text-xl lg:text-3xl font-medium mb-2">
            Understanding your business
          </h3>
          <p className="text-lg font-medium leading-tight tracking-wide">
            When set out to work on your project, we don’t just focus on the
            technological agenda. We aim to understand your company’s strategic
            direction so we can help you get the desired results.
          </p>
        </div>
      </div>
      <div
        className="mt-20 mx-6 lg:mx-14 py-10 px-4 md:px-10 lg:px-0 rounded-[30px] bg-white shadow-[0_0_30px_0_#262F87,_0_0_0px_0_#5A5D78]
 flex flex-wrap justify-center gap-6 md:gap-0"
      >
        <div className="w-[280px]text-center px-12 pb-10 lg:p-12 border-b-1 lg:border-b-0 lg:border-r-1">
          <img
            src="/image-1.png"
            alt="Star Icon"
            className="w-full h-28 object-contain mb-3"
          />
          <p className="text-[#5A5D78] font-medium text-[24px] leading-snug">
            Amiinfotech <br />
            latest awards
          </p>
        </div>

        <div className="w-[280px] text-center py-12 border-b-1 lg:border-b-0 lg:border-r-1">
          <img
            src="/image-2.png"
            alt="Award Software Developer"
            className="w-full h-28 object-contain mb-3"
          />
          <p className="text-[#5A5D78] font-medium text-[24px] leading-snug">
            TOP Software <br /> Developer in the US
          </p>
          <p className="text-[#161542] text-[24px] leading-snug">
            of the 2022 year
          </p>
        </div>

        <div className="w-[280px] text-center py-12 border-b-1 lg:border-b-0 lg:border-r-1">
          <img
            src="/image-3.png"
            alt="Award Blockchain"
            className="w-full h-28 object-contain mb-3"
          />
          <p className="text-[#5A5D78] font-medium text-[24px] leading-snug">
            TOP Blockchain <br /> Company
          </p>
          <p className="text-[#161542] text-[24px] leading-snug">
            of the 2021 year
          </p>
        </div>

        <div className="w-[280px] text-center py-12">
          <img
            src="/image-4.png"
            alt="Award Cybersecurity"
            className="w-full h-28 object-contain mb-3"
          />
          <p className="text-[#5A5D78] font-medium text-[24px] leading-snug">
            TOP Cybersecurity <br /> Consulting Company
          </p>
          <p className="text-[#161542] text-[24px] leading-snug">
            of the 2021 year
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
