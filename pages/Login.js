import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
const LoginPage = () => {
  return (
     <form action="/" >

    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <div className="hidden w-0 md:block md:w-1/2">
        <div className="w-full h-full">
          <Image
            src="/login.jpg" 
            alt=""
            className="object-cover w-full h-full hidden md:block "
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-7 mt-[20px] ">
        <div className="w-full flex justify-center mb-10 ">
          <div className="w-[200px]  object-cover mb-5 ">
            <Image    src="/logo.png" alt="" />
          </div>
        </div>
        <div className="flex-col text-center ">
          <div className="font-semibold">
            Welcome to <span className=" text-slate-500 ">CLOSED</span>
          </div>
          <div className="mt-[4vw] ">
            <label htmlFor="" className="pr-[10px]">
              UserName:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-slate-700 rounded-lg p-1 "
              required

            />
          </div>
          <div className="mt-[2vw] ">
            <label htmlFor="" className="pr-[14px]">
              Password:
            </label>
            <input
              type="Password"
              name=""
              id=""
              className="border border-slate-700 rounded-lg p-1 "
               required
              />
          </div>
          <div className="mt-5 " >

              <button className="bg-black text-white px-5 py-2 ml-6 rounded-md hover:bg-white hover:text-black hover:border-black border-transparent duration-300 ease-in-out border-2 transition-all  " type="submit" >Login</button>
          </div>
        </div>
        <div className=" flex justify-center mt-10 gap-4 ">
          <SlSocialInstagram className="text-xl" />
          <SlSocialFacebook className="text-xl" />
          <SlSocialTwitter className="text-xl" />
          <SlSocialGithub className="text-xl" />
          <SlSocialLinkedin className="text-xl" />

        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col justify-center items-center text-white bg-black hover:bg-white hover:text-black hover:border-black duration-300 ease-in-out h-[80px] hover:border-t-white border-transparent transition-all border-2">
          <Link href="/" className="transform rotate-90 cursor-pointer">
            Home
          </Link>
        </div>
      </div>
    </div>
     </form>
  );
};

export default LoginPage;
