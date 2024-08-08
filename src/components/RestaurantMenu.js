
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = ()=>{
    const [showIndex,setshowIndex] = useState(0)
    const {resId} = useParams()
const resto = useRestaurantMenu(resId)
if (resto === null) 
 return <Shimmer />


const dummy ="dummy Data";
 
const { name,cuisines,avgRating,costForTwo} = resto?.cards[2].card.card.info;

  const {itemCards} = resto.cards[5].groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
  
  const categories = resto?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   //console.log(categories)


  return(
        <div className="text-center">
            <h1 className="p-2 m-2 text-2xl font-bold">{name}</h1>
            
           { categories.map((category,index)=>
           <RestaurantCategory key={category?.card?.card.title} data ={category?.card?.card}
           showCategory = {index === showIndex ? true :false}
           setshowIndex = {() => setshowIndex(index)} dummy ={dummy}
           
           />)}
           
        </div>
    )
    }

export default RestaurantMenu;