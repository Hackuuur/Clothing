import React from "react";


const Wedding = () => {
  return (
    <div className="my-10 ">
      <div className=" relative w-full  ">
        <img src="/wedding.jpg" alt="" className="rounded-lg " />
      </div>
      <div className="mt-5 flex flex-col w-full items-center gap-4 ">
        <p className=" text-lg tracking-wide font-semibold " id="text">
          WEDDING WEAR
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          placeat?
        </p>
        <button className="text-white px-3 py-1 bg-black rounded-2xl text-sm md:text-base md:hover:shadow-lg duration-500 hover:scale-90 ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Wedding;
