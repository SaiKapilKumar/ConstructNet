import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const gradients = [
  "bg-gradient-to-b from-black via-purple-900 to-black",
  "bg-gradient-to-b from-black via-green-900 to-black",
  "bg-gradient-to-b from-black via-yellow-900 to-black",
  "bg-gradient-to-b from-black via-blue-900 to-black",
  "bg-gradient-to-b from-black via-pink-900 to-black",
  "bg-gradient-to-b from-black via-red-900 to-black",
  "bg-gradient-to-b from-black via-teal-900 to-black",
];

const blobKeyframes = `
  @keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }
    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }
`;

function HomeBanner() {
  const router = useRouter();
  const [gradientIndex, setGradientIndex] = useState(0);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchData.trim()) {
      router.push(`/search?q=${searchData}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.width = "520px";
    e.target.style.height = "520px";
    e.target.style.filter = "blur(30px)";
    e.target.style.boxShadow = `
      inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a,
      inset 200px 200px 0 0px #784ba8,
      inset 300px 300px 0 0px #2b86c5
    `;
  };

  const handleMouseLeave = (e) => {
    e.target.style.width = "500px";
    e.target.style.height = "500px";
    e.target.style.filter = "none";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className={`relative h-screen ${gradients[gradientIndex]} transition-all duration-1000`}
    >
      <style>{blobKeyframes}</style>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "linear-gradient(180deg, rgba(47, 184, 255, 0.42) 31.77%, #5c9df1 100%)",
            mixBlendMode: "color-dodge",
            animation: "move 25s infinite alternate",
            transition: "1s cubic-bezier(0.07, 0.8, 0.16, 1)"
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-center">
        <h1
          className="text-white text-5xl sm:text-5xl lg:text-6xl leading-relaxed mb-10"
          style={{ lineHeight: "1.4" }}
        >
          Connecting you to <i>Quality</i> Services & Professionals
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl gap-8 mb-4">
          <div className="relative flex-1 w-full">
            <IoSearchOutline className="absolute text-gray-500 text-2xl h-full left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              className="h-12 w-full pl-12 pr-4 rounded-md text-black"
              placeholder={`Try "Construction Services"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Search for services"
            />
          </div>
          <button
            className="h-13 bg-orange-500 text-white px-8 py-3 text-lg font-semibold rounded-md w-full sm:w-auto hover:bg-orange-600 transition-all duration-300 cursor-pointer hover:shadow-md"
            onClick={handleSearch}
            aria-label="Search"
          >
            Search
          </button>
        </div>
        <div className="text-white flex flex-wrap justify-center gap-4 mb-4">
          Popular:
          <ul className="flex flex-wrap gap-2">
            {[
              "architects",
              "interior designers",
              "civil engineers",
              "consultants",
            ].map((item) => (
              <li
                key={item}
                className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                onClick={() => router.push(`/search?q=${item}`)}
                aria-label={`Search for ${item}`}
              >
                {item
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
