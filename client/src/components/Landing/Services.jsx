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
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: '10px' // Center and reduce padding
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "-15px", // Adjust right position
          zIndex: 1,
          background: "none", // Remove background
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
          left: "-15px", // Adjust left position
          zIndex: 1,
          background: "none", // Remove background
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="services-container">
      <h2 className="text-5xl mb-10 text-[#404145] font-bold text-center">
        Tailored solutions to fit your requirements
      </h2>
      <Slider {...settings}>
        {categories.map(({ name, logo }, index) => (
          <div key={`${name}-${index}`} className="p-1">
            <div
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl transition-all duration-500 mx-1 my-3"
              onClick={() => router.push(`/search?category=${name}`)}
              style={{ width: "300px", height: "200px", margin: "0 5px" }} // Adjust card size and margin
            >
              <Image src={logo} alt="category" height={70} width={70} />
              <span>{name}</span>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-prev:before, .slick-next:before {
          color: black;
        }
        .slick-prev:hover:before, .slick-next:hover:before {
          color: grey;
        }
        .services-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 40px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default Services;
