import Card from "@/components/Card";
import React from "react";

const Womens = () => {
  return (
    <div className="px-[30px] md:px-[70px] ">
      <div className=" mt-7 flex justify-center uppercase font-semibold text-lg md:text-xl ">
        Women's collection
      </div>
      <div className="flex justify-between mb-[-25px] items-center ">
        <div>{`94 Product`}</div>
        <div className="flex items-center ">
          <div className="" >Sort By:</div>
          <select
            className="text-center border-none outline-none bg-gray-200 rounded-md "
            id="sortDropdown"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Price H-L">Price H-L</option>
            <option value="A-Z">A-Z</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  md:gap-8 my-14 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Womens;
