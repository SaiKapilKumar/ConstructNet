import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Tilt from "react-parallax-tilt";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    {
      name: "Architects",
      label: "Design your structures",
      image: "/service1.jpg",
    },
    {
      name: "Interior Designers",
      label: "Enhance your interiors",
      image: "/service3.jpg",
    },
    {
      name: "Civil Engineers",
      label: "Build your brand",
      image: "/service2.jpg",
    },
    { 
      name: "Consultants",
      label: "Provide expert advice", 
      image: "/service7.jpg" 
    },
    {
      name: "Project Managers",
      label: "Oversee your projects",
      image: "/service4.jpg",
    },
    {
      name: "Surveyors",
      label: "Measure and map your site",
      image: "/service5.jpg",
    },
    {
      name: "Safety Inspectors",
      label: "Ensure safety standards",
      image: "/service6.jpg",
    },
    {
      name: "Construction Workers",
      label: "Build with expertise",
      image: "/service8.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(15,25,35)] via-[rgb(23,37,53)] to-[rgb(15,25,35)] text-white py-20 px-4">
      <h2 className="text-4xl mb-5 font-bold text-left px-4">
        Popular Services
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 pt-8">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer transition-transform duration-500 transform hover:scale-105 hover:shadow-xl"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-xl sm:text-2xl">{name}</h6>
              </div>
              <div className="h-64 w-full sm:w-56 opacity-75 hover:opacity-50 transition-opacity duration-500"> 
                <Image
                  src={image}
                  fill
                  alt="service"
                  className="object-cover rounded-lg shadow-lg"
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
