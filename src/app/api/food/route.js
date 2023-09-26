import { NextResponse } from "next/server";


const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a9794253bamsh278570f0089ef6bp13c752jsn01a4de8aa415',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  

export const GET = async (req,res) =>{
    try {
        const response = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser`,options)
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
      return NextResponse.json({error})

    }
}