import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList"
import {CART_LOGO}  from "../utils/constant"
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{
    const itemList = useSelector((store)=>store.cart.items);
    console.log(itemList)

    const dispatch =useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearItem());
    }

    return (
        <div className="text-center ">
           <h1 className="text-center p-2 m-2 font-bold text-2xl text-green-400"> Cart</h1>

           <div className="w-6/12 m-auto">
            
            {itemList.length === 0 && (
                <div> <img className="w-auto " src={CART_LOGO} />
                <h1>Please add items in card</h1></div>
                 )}
            {itemList.length !=0 && (<button className="p-2 m-2 rounded-md bg-black text-white" onClick={handleClearCart}>Clear Cart</button>)}
            
            <ItemsList data={itemList}/>
              
        
            
            </div>
        </div>
    )
}

export default Cart;