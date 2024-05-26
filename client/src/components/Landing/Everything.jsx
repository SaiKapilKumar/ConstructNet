import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Everything() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const everythingData = [
    {
      title: "Stick to your budget",
      description:
        "With a wide range of services available, you can easily find a freelancer that fits your budget. Our platform offers flexible pricing options to suit your needs.",
    },
    {
      title: "Get quality work done quickly",
      description:
        "Our platform connects you with experienced professionals who are ready to start working on your project right away.",
    },
    {
      title: "Pay when you're happy",
      description:
        "We ensure that you have complete control over your payments. Payments are only released when you are fully satisfied with the work delivered.",
    },
    {
      title: "Count on 24/7 support",
      description:
        "Our dedicated support team is here to assist you at any time of the day or night. We're available 24/7 to provide you with the support you need.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-black sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {everythingData.map(({ title, description }, index) => (
            <div
              key={index}
              className="transition-all duration-500 bg-gray-800 bg-opacity-50 border border-gray-600 shadow-lg cursor-pointer hover:bg-gray-700 backdrop-filter backdrop-blur-lg rounded-lg"
            >
              <button
                type="button"
                id={`question${index + 1}`}
                data-state="closed"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 rounded-t-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex text-lg font-semibold text-white">{title}</span>
                <BsChevronDown
                  id={`arrow${index + 1}`}
                  className={`w-6 h-6 text-gray-400 transition-transform transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {openIndex === index && (
                  <div
                    id={`answer${index + 1}`}
                    className="px-4 pb-5 sm:px-6 sm:pb-6 text-white"
                  >
                    <p>{description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-base mt-9">
          Still have questions? 
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-white focus:text-white hover-underline">
            <br></br>Contact our support
          </span>
        </p>
      </div>
    </section>
  );
}

export default Everything;
