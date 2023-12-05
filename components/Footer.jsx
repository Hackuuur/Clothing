import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between gap-3 items-center">
            <div className="mb-6 md:mb-0">
              <Link href={"/"} className="flex items-center">
                 <img
                  src="/footerlogo.png"
                  alt=""
                  
                  className="w-[200px] h-[60px] md:w-[300px] md:h-[80px]"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/">Closed</Link>
                  </li>
                  <li>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:no-underline"
                    >
                      Tailwind CSS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:no-underline ">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:no-underline">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:no-underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:no-underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023
              <a href="" className="hover:no-underline">
                Closed™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 ">
              <Link href="/">
                <SlSocialInstagram className="text-xl" />

                <span className="sr-only">Instagram page</span>
              </Link>
              <Link href="/">
                <SlSocialFacebook className="text-xl" />

                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="/">
                <SlSocialTwitter className="text-xl" />

                <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="/">
                <SlSocialGithub className="text-xl" />

                <span className="sr-only">Github page</span>
              </Link>
              <Link href="/">
                <SlSocialLinkedin className="text-xl" />

                <span className="sr-only">Linkedin page</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
