
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data,showCategory,setshowIndex,dummy}) => {
    
    //const [showCategory,setshowCategory] = useState(false)
    
    const HandleClick = ()=>{
        console.log("clicked")
        setshowIndex()
        //setshowCategory(!showCategory)  //Toggle feature 
    }


    return (<div>
    <div className="w-6/12 bg-gray-100 p-4 mx-auto my-2 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
        <span className="font-semibold ">{data.title}({data.itemCards.length})</span>
        <span className="">🔽</span>
        </div>
        {showCategory && <ItemsList data= {data.itemCards} dummy = {dummy} />}
            
    </div>
    
   
    </div>
)
}

export default RestaurantCategory;