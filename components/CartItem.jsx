import Image from 'next/image'
import React from 'react'

const CartItem = () => {
  return (
    <div className='flex py-5 gap-5 w-full ' >
        <div className='w-[60px] h-[60px] aspect-square md:w-[120px] md:h-[120px] ' >
             <img   src="p1.webp" alt="" className='rounded-lg' />
        </div>
        <div className='w-full flex flex-col' >
            <div className='flex flex-col  md:flex-row justify-between mt-0 md:mt-1' >
                <div className='text-lg md:text-xl font-medium '>Viper jacket </div>
                <div className='text-lg md:text-xl font-medium block md:hidden '>Unisex </div>
                <div className='text-lg md:text-xl font-medium '>MRP $200.00 </div>
                
            </div>
            <div className='text-lg md:text-xl font-medium hidden md:block' >
                Unisex
            </div>
            <div className='flex  mt-3  ' >
                <div className='flex  gap-1 text-sm md:text-lg ' >
                    <div className='flex items-center gap-1  ' >
                        <div>Size:</div>
                        <select className="hover:text-black" id="">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-1' >
                        <div>Quantity:</div>
                        <select className="hover:text-black" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex justify-end md:gap-5 gap-8  '>
                <button className='hover:bg-black hover:text-white duration-200 px-2 py-1 rounded-lg border border-black ' >Buy</button>
                <button className='hover:bg-black hover:text-white duration-200 px-2 py-1 rounded-lg border border-black ' >Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem