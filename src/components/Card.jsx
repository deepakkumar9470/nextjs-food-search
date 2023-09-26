import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader from "./Loader";

const Card = ({ item,loading }) => {

  return loading ? <Loader/> :   (
    <div className=" w-[250px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href={`${item.recipe.url}`}>
        <Image
          width={400}
          height={500}
          src={item.recipe.image}
          alt="Product"
          className="object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {item.recipe.dishType[0]}
          </span>
          <p className="text-base font-bold text-black truncate block capitalize">
            {item.recipe.label}
          </p>
          <Link
            href={`${item.recipe.url}`}
            className="bg-white border text-black px-2 rounded-3xl text-[10px]"
           
          >
            Read more
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Card;
