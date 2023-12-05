import React from 'react'
import Card from './Card'

const Newcollection = () => {
  return (
    <div >
        <div className=' mt-7 flex justify-center uppercase font-semibold text-lg md:text-xl '>New collection</div>
        <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  md:gap-8 my-14 ' >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>

  )
}

export default Newcollection