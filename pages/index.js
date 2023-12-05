// index.js
import React, { useState } from "react";
import CategorySection from "@/components/CategorySection";
import Newcollection from "@/components/Newcollection";
import Wedding from "@/components/Wedding";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>

      <main className="px-[20px] md:px-[70px] py-10">
        <div className="w-full px-[20px] lg:px-[70px] flex">
          <div className="relative w-full">
            <div className="w-full lg:h-[450px] h-auto">
              <video
                src="/Home.mp4"
                loop
                autoPlay
                muted
                controlsList="nodownload"
                preload="auto"
                className="rounded-lg w-full h-full object-cover z-10 "
              ></video>
            </div>
            <div className="absolute z-10 bottom-[25px] md:bottom-[80px] left-5 md:left-10">
              <p className="text-white w-[100px] md:w-[500px] text-[15px] md:text-[30px] font-light md:leading-relaxed leading-4 italic ">
                Tolus Spring Collection
              </p>
              <p className="font-bold hidden md:block ">
                Grab The Our Latest Collection.
              </p>
            </div>
            <button
              className="absolute bottom-5 right-4 text-sm md:text-lg bg-white rounded-3xl py-1 px-3 md:right-10 md:bottom-9"
              href="/"
            >
              Buy Now
            </button>
          </div>
        </div>
        <Newcollection />
        <Wedding />
        <CategorySection />
      </main>
    </>
  );
}
