import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "@/components/Button";
import RelatedProduct from "@/components/RelatedProduct";
import Image from "next/image";

const PRODUCT = () => {
  return (
    <div>
             <hr className="my-6  lg:my-8" />

      <div className="px-5 md:px-[70px] " >
        <div className="flex flex-col md:flex-col md:mt-5 lg:flex-row gap-[20px] lg:gap-[100px] ">
          <div className="w-full md:w-auto flex-[1]  max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <div className=" text-white text-[20px] w-full  mx-auto sticky ">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
              >
                 <img   src="/p1.webp" alt="" />
                 <img   src="/p2.webp" alt="" />
                 <img   src="/p3.webp" alt="" />
                 <img   src="/p4.webp" alt="" />
                 <img   src="/p5.webp" alt="" />
                 <img   src="/p6.webp" alt="" />
              </Carousel>
            </div>
          </div>
          <div className="flex-[1] py-3 mt-5 ">
            <div className="text" >

            <div className="text-[20px] font-bold mb-4 h-4 ">
              Closed Clothing
            </div>
            <div className="text-[34px] font-black w-full sm: mb-3 leading-8  ">
              Viper Beige Jacket
            </div>

            <div className="text-[20px] mt-4">₹ 2,699.00</div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  dark:border-gray-600 lg:my-8" />
            <div>
              <h2 className="uppercase">Description</h2>
              <br />
              <p>
                <span className=" font-bold pr-1 ">The Viper</span>
                If you’re looking for change, you have to take the first step.
                This design is all about shedding your outer layers and blooming
                into your true self; ferocious with just a touch of softness.
                This Jacket has a quilted lining on inside.{" "}
              </p>
              <div className="mt-[5px]">
                <h1 className="font-extrabold">Size:</h1>
                <div className="grid grid-cols-4 xl:grid-cols-5 md:grid-cols-4 mt-2 gap-3  ">
                  <Button name="S" />
                  <Button name="M" />
                  <Button name="L" />
                  <Button name="XL" />
                  <Button name="XXL" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7 px-1 md:px-5 w-full flex md:flex-row sm:px-0 flex-col md:justify-around gap-3 ">
          <div>
            <h1 className="font-bold pb-2 md:text-2xl  ">Full OverView</h1>
            <ul className="list-disc pl-[33px] flex flex-col gap-2 text-lg ">
              <li>Height of the Male model - 6'0</li>
              <li>Male Model wearing Size - L</li>
              <li>GSM - 330-350</li>
              <li>Fit - Regular (Please refer to our size chart)</li>
              <li>Composition - 60%Cotton + 40% Polyester </li>
            </ul>
          </div>
          <div>
            <h1 className=" font-bold pb-2 md:text-2xl">Product Care</h1>
            <p className="text-lg" >Dry Clean Only.</p>
            <br />
            <p  className="text-lg" >Please take care of me so we can spend a long time together.</p>
          </div>
        </div>
        <RelatedProduct />
      </div>
    </div>
  );
};

export default PRODUCT;
