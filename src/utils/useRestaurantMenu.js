import { useEffect,useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId)=>{
    useEffect(()=>{
        fetchData();
    },[])

const [restro,setRestro] = useState(null)
    const fetchData = async()=>{
        let data = await fetch(MENU_URL+resId);
        let json =await data.json()
        setRestro(json.data)
    }
    return restro;
}

export default useRestaurantMenu;