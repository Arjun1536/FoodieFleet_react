import { useContext } from "react";
import {CDN_URL} from "../utils/constant";
import userContext from "../utils/userContext";
const Restrorant_card = (props) => {
  const { resData } = props;
  const {userLoggedIn} = useContext(userContext)
  return (
    <div className="p-4 m-4 w-[250px] h-96 bg-green-100 hover:bg-green-200 rounded-md">
      <img
        className="rounded-md object-cover h-48 w-96 "
        alt="food-logo"
        src={CDN_URL+ resData.info.cloudinaryImageId}
        />
      <h3 className="font-bold py-2">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4 className="font-bold">{resData.info.avgRating}⭐</h4>
      <h4>{resData.info.costForTwo}Rating</h4>
      <h4>{userLoggedIn}</h4>
    </div>
  );
};

//Higer Order function use as promoted label on top

export const withPromotedLabel = (Restrorant_card)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute text-white bg-black rounded-md p-2 m-2 " >Promoted</label>
        <Restrorant_card {...props}/>
      </div>
    )
  }
}

export default Restrorant_card;