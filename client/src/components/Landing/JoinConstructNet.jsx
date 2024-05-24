import Image from "next/image";
import React from "react";

function JoinConstructNet() {
  return (
    <div className="relative">
      <div className="absolute z-10 top-1/3 left-10 mt-10">
        <h4 className="text-white text-6xl mb-10 ml-5">
          Suddenly it&apos;s all so <i>doable.</i>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2 border-orange-500 bg-orange-500 text-white rounded-md ml-5"
          type="button"
        >
          Join ConstructNet
        </button>
      </div>
      <div className="relative w-full h-96 md:h-96 lg:h-[600px]">
        <Image
          src="/bg-signup.webp"
          layout="fill"
          objectFit="cover"
          alt="signup"
          className="rounded-sm"
        />
      </div>
    </div>
  );
}

export default JoinConstructNet;
