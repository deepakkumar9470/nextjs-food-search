import React from "react";
import Card from "./Card";
import Image from "next/image";

const Recepies = ({ foods,searchFood,setSearchFood,handleSearch,loading,setLoading }) => {
  return (
    <div className="flex items-center flex-col mt-10">
     <div className="w-full gap-2 md:w-[200px] flex md:gap-4 item-center">
     <input
        className="bg-gray-50 rounded-full mb-20 outline-none px-12 py-3 text-gray-500 mx-auto"
        type="text"
        value={searchFood}
        onChange={(e) => setSearchFood(e.target.value)}
        placeholder="Search for recepie"
      />
      
            <Image 
              className="w-10 h-10 bg-white shadow-md cursor-pointer rounded-full hover:scale-110 transition-all" 
               onClick={handleSearch} 
               src="/search.png" 
               width={25} 
               height={25} alt="search"/>
  
     </div>

      <div className="w-fit grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-5 mb-5">
        {foods?.map((food) => (
          <Card key={food.foodId} item={food} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default Recepies;
