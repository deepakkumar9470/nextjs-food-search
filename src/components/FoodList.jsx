import Image from 'next/image'
import React from 'react'

const FoodList = () => {
    const icons = [
        {
            icon :'/icons/diet1.png'
        },
        {
            icon :'/icons/fast-food.png'
        },
        {
            icon :'/icons/salad.png'
        },
        {
            icon :'/icons/burger.png'
        },
        {
            icon :'/icons/diet2.png'
        },
        {
            icon :'/icons/vegetable.png'
        },
        {
            icon :'/icons/coffee.png'
        },
        {
            icon :'/icons/salads.png'
        }
    ]
  return (

     <div>
        <Image 
          className='w-full h-[450px] object-cover relative
          bg-[rgba(0,0,0,0.25)]' 
          src="/food-bg.jpeg" 
          width={800} 
          height={409} alt="food-bg"/>

         <div className="hidden md:flex md:flex-wrap md:gap-12 mt-20 items-center justify-center absolute top-40 left-40">
        
        {icons.map((item,i)=>(
            <div key={i} className="border rounded-full shadow-md  p-3 transform
              transition duration-500 hover:scale-110 cursor-pointer">
              <Image  src={item.icon} width={50} height={50} alt="food"/>
            </div>
        ))}
    </div>
     </div>
  )
}

export default FoodList