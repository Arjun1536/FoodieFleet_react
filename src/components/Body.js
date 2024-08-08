import Restrorant_card, { withPromotedLabel } from "./Restrorant_card";
import Res_obj from "../utils/mock_Data";
import { useEffect, useState,useContext } from 'react';
import React from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";
import userContext from "../utils/userContext"




const Body = () => {
  const [res, setres] = useState([])
  const [filterRes, setfilterRes] = useState([])
  const [searchText, setsearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  //UseContext 
  const {userLoggedIn,setuserName} = useContext(userContext)

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setres(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterRes(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json);

  }
  const onlineStatus = useOfflineStatus()
  if (onlineStatus === false) {
    return <h1>Your are not connected with Internet</h1>
  }


  if (res === null) {
    return <Shimmer />
  }

  //Promoted label
  const Restaurant_label = withPromotedLabel(Restrorant_card)


  return (
    <div className="body">
      <div className="p-3 m-2 flex">
        <div className=""><input type="text" className=" border border-solid border-black" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
          <button className=" m-2 px-4 py-2  bg-blue-100 rounded-sm" onClick={() => {
            let filterRestro = res.filter((restro) => restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterRes(filterRestro)
          }}>Search</button></div>
        <div className="search">
          <button className="m-2 px-4 py-2  bg-blue-100 rounded-sm" onClick={() => {
            let Res_obj1 = res.filter((resto) => resto.info.avgRating >= 4.0);
            //console.log(Res_obj1)
            setfilterRes(Res_obj1)
            console.log("button click")
          }} >Top Rated Restro</button>
        </div>

        <div className="m-2 px-4 py-1 ">
          UserName:<input className="border border-solid border-blue-200 p-2" value={userLoggedIn} onChange={(e)=>setuserName(e.target.value)}/>
        </div>

      </div>
      <div className="flex flex-wrap">
        {
           filterRes && filterRes.map((Restro) => (
            <Link className="link" key={Restro.info.id} to={"/restaurants/" + Restro.info.id}>
              <a className="colorChange"> 
              {Restro.info.promoted ? (<Restaurant_label resData={Restro} /> ):(<Restrorant_card resData={Restro} />) }
               </a>
            </Link>

          ))
        }



      </div>
    </div>
  );
};

export default Body;