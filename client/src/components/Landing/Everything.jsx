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
    <div className="bg-gradient-to-b from-violet-950 via-violet-800 to-violet-950 flex py-20 justify-between px-24">
      <div className="w-2/4 pr-10">
        <h2 className="text-4xl mb-5 text-white font-extrabold">
          The best part? Everything.
        </h2>
        <div className="p-8 bg-violet-700 bg-opacity-60 rounded-lg">
          <Accordion
            allowZeroExpanded
            preExpanded={[openIndex]}
            onChange={(expandedItems) => setOpenIndex(expandedItems[0])}
          >
            {everythingData.map(({ title, subtitle, description }, index) => {
              return (
                <AccordionItem
                  key={title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setOpenIndex(index)}
                  className={`transition-all duration-300 mb-8 ${
                    hoveredIndex === index ? "bg-violet-800 p-4 rounded-lg" : ""
                  }`}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex gap-2 items-center text-xl text-white">
                      <BsChevronDown className="text-gold" />
                      <h4>{title}</h4>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="text-[#d1d5db] pl-4">
                    <p className="mt-2 ml-4">{description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className="relative h-96 w-2/4">
        <Image src="/everything.webp" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;
