import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[100px] py-2 border-b-2'>
        
        <div className='pl-10'>
         <Link href="/">
          <Image src="/food.png" width={60} height={60} 
          className='text-xl md:text-3xl font-extrabold' alt="logo"/>
         </Link>
        </div>


        <div className='hidden md:flex items-center gap-2 md:gap-4'>

            <div className='md:flex hidden md:block items-center gap-2 pr-4'>
               <span className='text-xl font-bold cursor-pointer
               text-red-500 hover:text-red-800'>Food</span>
            </div>
            <div className='md:flex hidden md:block items-center gap-2 pr-4'>
               <span className='text-xl font-bold cursor-pointer
               text-red-500 hover:text-red-800'>Order</span>
            </div>
            <div className='md:flex hidden md:block items-center gap-2 pr-4'>
               <span className='text-xl font-bold cursor-pointer
               text-red-500 hover:text-red-800'>Contact</span>
            </div>
        </div>


    </div>
  )
}

export default Navbar