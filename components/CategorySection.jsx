import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const CategorySection = () => {
  return (
    <div className="grid grid-cols-3 my-[50px] gap-5 md:gap-9 ">
      <Link href={"/Mens"} className="relative">
           <img   src="images.jpeg" alt="" className="  rounded-md " />
        <p className="absolute bottom-1/4 left-4 md:left-8 lg:left-11 md:bottom-[75px] text-base font-semibold md:text-2xl text-black uppercase ">
          MEN
        </p>
        <button className="absolute  text-sm md:text-base font-semibold bottom-2 md:bottom-8 left-4 md:left-8 lg:left-10 bg-white rounded-2xl md:rounded-3xl px-2  md:px-4 md:py-2 duration-500 hover:scale-90 ">
          See..
        </button>
      </Link>
      <Link href={"/Womens"} className="relative">
          <img    src="images1.jpeg" alt="" className=" rounded-md " />
        <p className="absolute bottom-1/4 left-4 md:left-8 lg:left-11 md:bottom-[75px] text-base font-semibold md:text-2xl text-black uppercase ">
          woman
        </p>
        <button className="absolute  text-sm md:text-base font-semibold bottom-2 md:bottom-8 left-4 md:left-8 lg:left-10 bg-white rounded-2xl md:rounded-3xl px-2  md:px-4 md:py-2 duration-500 hover:scale-90 ">
          See..
        </button>
      </Link>
      <Link href={"/Kids"} className="relative ">
           <img  src="images2.webp" alt="" className=" rounded-md" />
        <p className="absolute bottom-1/4 left-4 md:left-8 lg:left-11 md:bottom-[75px] text-base font-semibold md:text-2xl text-black uppercase ">
          kids
        </p>
        <button className="absolute  text-sm md:text-base font-semibold bottom-2 md:bottom-8 left-4 md:left-8 lg:left-10 bg-white rounded-2xl md:rounded-3xl px-2  md:px-4 md:py-2 duration-500 hover:scale-90 ">
          See..
        </button>
      </Link>
    </div>
  );
};

export default CategorySection;
