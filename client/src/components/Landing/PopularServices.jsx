import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

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
    <div className="min-h-screen bg-gradient-to-b from-[rgb(15,25,35)] via-[rgb(23,37,53)] to-[rgb(15,25,35)] text-white py-20 px-20">
      <h2 className="text-4xl mb-5 font-bold text-left px-4">
        Popular Services
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 justify-center">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer transition-transform duration-500 transform hover:scale-105 hover:shadow-xl w-full sm:w-72 h-96 max-w-xs bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="relative w-full h-3/4 mb-4 overflow-hidden flex justify-center items-center">
                <Image
                  src={image}
                  layout="fill"
                  alt="service"
                  className="object-cover transform transition-transform duration-500 hover:scale-120"
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="text-center text-white z-10">
                <span className="block text-lg">{label}</span>
                <h6 className="font-extrabold text-xl sm:text-2xl">{name}</h6>
              </div>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        @mixin flex-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glassBox {
          &, & * {
            box-sizing: border-box;
            transition: 400ms;
          }
          width: 100%;
          height: 400px;
          max-width: 300px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-right-color: rgba(255, 255, 255, 0.1);
          border-bottom-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
          padding: 15px;
          position: relative;
          @include flex-center;
          flex-direction: column;
        }

        .glassBox__imgBox {
          width: 100%;
          height: auto;
          position: relative;
        }

        .glassBox__imgBox img {
          display: block;
          width: 100%;
          height: auto;
        }

        .glassBox__title {
          text-align: center;
          margin-top: 15px;
          color: #fff;
          font-size: 20px;
          font-weight: 400;
          font-family: "Lato";
        }

        .glassBox__content {
          position: absolute;
          right: 15px;
          bottom: 15px;
          left: 15px;
          text-align: center;
          color: #fff;
          font-size: 14px;
          font-family: "Lato";
          letter-spacing: 0.1em;
          opacity: 0;
        }

        .glassBox:hover .glassBox__imgBox {
          transform: translateY(-50px);
        }

        .glassBox:hover .glassBox__imgBox img {
          transform: translate(-20px, -40px) rotate(15deg) scale(1.4);
        }
      `}</style>
    </div>
  );
}

export default PopularServices;
