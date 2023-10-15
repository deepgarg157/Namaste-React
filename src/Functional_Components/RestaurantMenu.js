import { useEffect, useState } from "react";
import resList from "../utils/mock_data";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    // const { resId } = useParams()

    // const resInfo = useRestaurantMenu(resId)

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6302312&lng=77.4349177&restaurantId=254002&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setResInfo(json?.data);
      };


      if (resInfo === null){
        return <Shimmer />
      }
 
      const {name, cuisines, avgRating, costForTwo} = resInfo.cards[0].card.card.info
 
    return (
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100}</h4>
            <h3>Menu</h3>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Chaap Masala</li>
            </ul>
        </div>
    )
}

// High order components

export const withPromotedRest = (RestaurantMenu)=>{
   return ()=>{
    return (
        <div>
            <label>Promoted</label>
            <RestaurantMenu />
        </div>
    )
   }
}

export default RestaurantMenu;