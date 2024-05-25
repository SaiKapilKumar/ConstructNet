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

  return (
    <div
      className={`relative h-screen ${gradients[gradientIndex]} transition-all duration-1000`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-center">
        <h1
          className="text-white text-5xl sm:text-5xl lg:text-6xl leading-relaxed mb-10"
          style={{ lineHeight: "1.4" }}
        >
          Connecting you to <i>Quality</i> Services & Professionals
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl gap-4 mb-4">
          <div className="relative flex-1 w-full">
            <IoSearchOutline className="absolute text-gray-500 text-2xl h-full left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              className="h-14 w-full pl-12 pr-4 rounded-md rounded-r-none text-black"
              placeholder={`Try "Construction Services"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Search for services"
            />
          </div>
          <button
            className="bg-orange-500 text-white px-8 py-3 text-lg font-semibold rounded-md sm:rounded-l-none w-full sm:w-auto"
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
                className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
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
