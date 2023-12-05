import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <Link href={`/products/1`} className="md:hover:shadow-lg duration-500 hover:scale-105 rounded-lg border-full ">
     <img  src="/t-shirt.webp" alt="Product image" className='w-full rounded-md   ' />
    <div className="p-2 text-black/[1] font-bold uppercase ">
      <h2 className="hover:opacity-80">Product Name</h2>
      <div className="flex items-center pb-3 text-black/[0.6] ">
        <p className=" mr-2 text-lg font-semibold">$80</p>
        <p className=" text-xs  line-through font-semibold">$100.00</p>
        <p className="text-base ml-auto font-medium text-green-500 ">-30%</p>
      </div>
    </div>
  </Link>
  )
}

export default Card