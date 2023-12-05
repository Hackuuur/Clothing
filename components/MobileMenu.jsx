import Link from "next/link";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";

const data = [
  { id: 1, name: "Men", url: "/Mens" },
  { id: 2, name: "Women", url: "/Womens" },
  { id: 3, name: "Kids", url: "/Kids" },
  { id: 4, name: "All", url: "/AllProducts" },
];


const MobileMenu = ({ setMobileMenu }) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", setMobileMenu);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [setMobileMenu]);

  return (
    <ul className="flex flex-col md:hidden   font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-30px)] bg-white border-t text-black z-50 ">
      {data.map((item) => (
        <li key={item.id} className="py-4 px-5 border-b">
          <Link href={item.url} onClick={() => setMobileMenu(false)}>
            {item.name}
          </Link>
        </li>
      ))}
      <Link href="/Cart" className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        <CiShoppingCart className=" text-[25px] text-black " />
      </Link>
    </ul>
  );
};

export default MobileMenu;
