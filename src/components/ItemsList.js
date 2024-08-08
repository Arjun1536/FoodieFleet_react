import { useDispatch } from "react-redux";
import { CDN_URL, RANDOM_IMG } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ data ,dummy}) => {
    //console.log(dummy)
const Dispatcher = useDispatch()

const handleItems = (item)=>{
Dispatcher(addItem(item))
}
    return (
    <div>
        
        {data && data.map((item) => (
            
            <div div key = { item.card.info.id } className = "border border-b-2 py-2 text-left flex justify-between" >
                
               
                <div className="w-9/12" > 
                    
                    <span className="font-bold p-1 ">{item.card.info.name}</span>
                    <span className="p-2"> - ₹{item.card.info.price ?item.card.info.price / 100 : item.card.info.defaultPrice /100}</span>
                    <p className="text-xs p-1">{item.card.info.description}</p>
                </div>
                
                
                <div className=" w-3/12 object-cover  p-4">
                    <div className="absolute"> 
                    
                        <button className="bg-green-200 text-black rounded-md " onClick={()=>handleItems(item)}> Add+</button>
                       
                    </div>
                    <img alt="image missing" src={! CDN_URL +item.card.info.imageId ? CDN_URL + item.card.info.imageId : RANDOM_IMG}  className="max-w-32 rounded-md object-contain" />
                </div>
            </div>


    ))
}

    </div >)
}
export default ItemsList;