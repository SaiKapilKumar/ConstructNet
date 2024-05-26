import { categories } from "../../utils/categories";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: "0px",
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "20px",
          zIndex: 1,
          background: "none",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "20px",
          zIndex: 1,
          background: "none",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="services-container py-20 bg-gradient-to-b from-gray-900 to-black backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg">
      <h2 className="text-5xl mb-20 text-white font-bold text-center">
        Tailored solutions to fit your requirements
      </h2>
      <Slider {...settings}>
        {categories.map(({ name, logo }, index) => (
          <div key={`${name}-${index}`} className="p-1">
            <div
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl transition-all duration-500 mx-1 my-3 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shine-effect"
              onClick={() => router.push(`/search?category=${name}`)}
              style={{ width: "260px", height: "220px", margin: "0 auto" }}
            >
              <Image src={logo} alt="category" height={70} width={70} />
              <span className="text-white mt-2">{name}</span>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-prev:before, .slick-next:before {
          color: white;
        }
        .slick-prev:hover:before, .slick-next:hover:before {
          color: grey;
        }
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect:before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-25deg);
          transition: left 0.7s ease-in-out;
        }
        .shine-effect:hover:before {
          left: 125%;
        }
        .slick-slide > div {
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
}

export default Services;
