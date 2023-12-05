import CartItem from "@/components/CartItem";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full px-[10px] md:px-[70px] ">
      <div
        className="w-full  max-w-[1280px] px-5 md:px-10 mx-auto">
         
      <div className="text-center  max-w-[800px] mx-auto  mb-2 mt-9 md:mt-1 ">
        <div className="text-[28px] md:text-[34px] mb-50 font-bold leading-tight ">
          Shoping Cart
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 py-10">
        <div className=" flex-[2] ">
          <div className=" text-lg font-semibold  ">Cart Items</div>
          <CartItem />
          <CartItem />
          
        </div>
        <div className="flex-[1]">
            <div className=" text-lg font-semibold ">Summery</div>
            <div className="p-5 my-5  rounded-xl">
              <div className="flex justify-between">
                <div className=" uppercase text-md md:text-lg font-medium text-black ">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black ">
                  $200.00
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo
                blanditiis tempore nemo, vel nostrum minima optio magni placeat
                
              </div>
              <button className=" w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3  hover:opacity-80 ">
                Check Out
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
