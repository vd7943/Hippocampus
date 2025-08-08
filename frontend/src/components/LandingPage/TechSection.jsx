import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const menuItems = [
  "DESIGN",
  "MOBILE",
  "FRONTEND",
  "BACKEND",
  "BLOCKCHAIN",
  "DATABASE",
  "INFRASTRUCTURE",
  "TESTING",
];

const contentData = {
  DESIGN: {
    number: "01",
    title: "DESIGN",
    items: [
      {
        name: "Figma",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Adobe XD",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
      },
      {
        name: "Sketch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
      },
    ],
  },
  MOBILE: {
    number: "02",
    title: "MOBILE",
    items: [
      {
        name: "Flutter",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      },
      {
        name: "React Native",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Swift",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      },
    ],
  },
  FRONTEND: {
    number: "03",
    title: "FRONTEND",
    items: [
      {
        name: "React.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Vue.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "Angular",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
    ],
  },
  BACKEND: {
    number: "04",
    title: "BACKEND",
    items: [
      {
        name: "Ruby",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      },
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Elixir",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg",
      },
      {
        name: "Ruby on Rails",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
      },
      {
        name: "Phoenix",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/phoenix/phoenix-original.svg",
      },
      {
        name: "Go",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      },
    ],
  },
  BLOCKCHAIN: {
    number: "05",
    title: "BLOCKCHAIN",
    items: [
      {
        name: "Ethereum",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
      },
      {
        name: "Polkadot",
        icon: "https://cdn.simpleicons.org/polkadot/EB4899",
      },
      {
        name: "Solidity",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
      },
    ],
  },
  DATABASE: {
    number: "06",
    title: "DATABASE",
    items: [
      {
        name: "MySQL",
        icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  INFRASTRUCTURE: {
    number: "07",
    title: "INFRASTRUCTURE",
    items: [
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Docker",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      },
    ],
  },
  TESTING: {
    number: "08",
    title: "TESTING",
    items: [
      {
        name: "Jest",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
      },
      {
        name: "Cypress",
        icon: "https://avatars.githubusercontent.com/u/8908513?s=200&v=4",
      },
      {
        name: "Selenium",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
      },
    ],
  },
};

const TechSection = () => {
  const [active, setActive] = useState("BACKEND");

  return (
    <div className="max-w-[920px] mx-auto py-12 px-4">
      <h2 className="text-3xl lg:text-4xl font-medium mb-4 tracking-wide">
        Software Development Platforms, Technologies & Languages
      </h2>
      <p className="max-w-3xl mb-10 text-md lg:text-xl font-medium leading-tight tracking-wide">
        Create exceptional customer experiences & drive meaningful insights
        guided by the best app development practices and technology trends in
        the digital world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto scrollbar-hide">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`flex items-center flex-shrink-0 cursor-pointer space-x-2 text-left text-lg md:text-xl transition-all ${
                active === item
                  ? "text-[#595E94] font-semibold"
                  : "text-black font-medium"
              }`}
            >
              {active === item && <FaArrowRight className="text-indigo-400" />}
              <span>{item}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-9 ps-4 lg:ps-0">
          {contentData[active] ? (
            <>
              <div className="flex flex-col items-start mb-8">
                <span className="text-5xl md:text-7xl font-bold text-gray-200">
                  {contentData[active].number}
                </span>
                <span className="italic text-lg md:text-xl font-semibold">
                  {contentData[active].title}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {contentData[active].items.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-base md:text-lg">{tech.name}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-gray-500">No content for {active}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
