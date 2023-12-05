import React, { useState } from "react";
import Offer from "./Offer";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div>
        <div className="">
          <Offer />
        </div>
        <div className=" flex w-full relative justify-between py-2 my-3 px-[30px] md:px-[70px]  ">
          <div className=" sm:flex sm:gap-4 hidden">
            <Link href={"/Mens"}>MEN'S</Link>
            <Link href={"/Womens"}>WOMENS</Link>
            <Link href={"/Kids"}>KIDS</Link>
            <Link href={"/AllProducts"}>ALL</Link>
          </div>
          <Link href={"/"} className="bg-white md:mr-8 ">
             <img 
              src="/logo.png"
              
              alt=""
              
              className="w-[110px] h-[25px] bg-white  "
            />
          </Link>
          <div className="flex gap-3">
            <CiSearch className="text-[25px]" />
            <Link href="/Cart">
              <CiShoppingCart className=" text-[25px] " />
            </Link>
            <Link href="/Login">Login</Link>
            <div className="md:hidden  ">
          {mobileMenu && (<MobileMenu setMobileMenu={setMobileMenu} />)}

              {mobileMenu ? (
                <VscChromeClose
                  className={"text-[20px]"}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                />
              ) : (
                <BiMenuAltRight
                  className={" text-[20px]"}
                  onClick={() => {
                    setMobileMenu(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
