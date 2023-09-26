import Image from 'next/image'
import React from 'react'

const Poster = () => {
  return (
    
    <div className='w-full  h-[270px] p-5'>      
       <Image src="/food-bg.jpeg" width={800} height={609} alt="food-bg"/>
    </div>
  )
}

export default Poster