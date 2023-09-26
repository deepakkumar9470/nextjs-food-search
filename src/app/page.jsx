"use client"

import FoodList from '@/components/FoodList';
import Loader from '@/components/Loader';
import Recepies from '@/components/Recepies';
import { useState,useEffect } from 'react';

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [searchFood, setSearchFood] = useState('');
  const [loading,setLoading] = useState(false)
  const MY_APP_ID=process.env.NEXT_PUBLIC_EDMAN_ID;
  const MY_APP_KEY=process.env.NEXT_PUBLIC_EDMAN_API_KEY;

  const getRecipes = async ()=>{
    setLoading(true)
    const result= await fetch(`https://api.edamam.com/search?q=${searchFood}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`, {
      method : 'GET',
      headers : {
        "Content-Type" : "application/json",
      }
    });
    const data = await result.json()
    console.log(data);
    setFoods(data.hits);
    setLoading(false)
  };
  useEffect(() => {
    getRecipes()
  }, [])
  


  
   const handleSearch = () =>{
    getRecipes()
    setSearchFood('')
  }

  // if(!foods.length) return <Loader/>
  return (
    <> 
       <FoodList/>
       <Recepies 
          foods={foods} 
          searchFood={searchFood}
          setSearchFood={setSearchFood}
          handleSearch={handleSearch}
          loading={loading}
          setLoading={setLoading}/>
     
    </>
  )
}
