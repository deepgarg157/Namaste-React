import RestaurrentCard from "./RestaurrentCard";
import resList from "../utils/mock_data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {

  // Local state variables - super power variable
  // hooks useState
  const [listRestaurrent, setListOfRestaurants] = useState([]);
  const [filterRest, setFilterRest]=useState([]);

  const [inputSearch, SetInputSearch]= useState("");

  // normal JS variables
  
  // let listRestaurrent = [
  //   {
  //     "info": {
  //       "id": "641038",
  //       "name": "Biryani Mahal",
  //       "cloudinaryImageId": "jgyhyl8ttz7owvit7liu",
  //       "locality": "Shahberi",
  //       "areaName": "crossing republic",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Biryani",
  //         "North Indian",
  //         "Indian",
  //         "Chinese"
  //       ],
  //       "avgRating": 4,
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "641037",
  //       "name": "Khana Mahal",
  //       "cloudinaryImageId": "jgyhyl8ttz7owvit7liu",
  //       "locality": "Shahberi",
  //       "areaName": "crossing republic",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Biryani",
  //         "North Indian",
  //         "Indian",
  //         "Chinese"
  //       ],
  //       "avgRating": 4.7,
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "6410377",
  //       "name": "KFC",
  //       "cloudinaryImageId": "jgyhyl8ttz7owvit7liu",
  //       "locality": "Shahberi",
  //       "areaName": "crossing republic",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Biryani",
  //         "North Indian",
  //         "Indian",
  //         "Chinese"
  //       ],
  //       "avgRating": 4.1,
  //     }
  //   }
  // ]

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(resList)
    setFilterRest(resList)
  }

  // if(listRestaurrent.length == 0){
  // return <Shimmer/>
  // } 

  return listRestaurrent.length == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search-container">

          <input type="text" name="input" className="input" value={inputSearch} onChange={(e)=>{
                    SetInputSearch(e.target.value);
          }}/>

          <button onClick={()=>{
            const filterRestaurant=listRestaurrent.filter((res)=> res.info.name.toLowerCase().includes(inputSearch))
            setFilterRest(filterRestaurant)
          }}>Search</button>

        </div>
        <button className="filter-btn" onClick={() => {
          console.log("clicked on rated button");
          let filteredRestaurant = listRestaurrent.filter(rate => rate.info.avgRating >= 3.5)
          setListOfRestaurants(filteredRestaurant)
        }}>Top Rated Restaurrents</button>

      </div>
      <Link to="/restaurant/resId:"><div className="res-container">
        {filterRest.map((restaurant) => (<RestaurrentCard resName={restaurant} key={restaurant.info.id} />))}
      </div></Link>

    </div>
  )
}

export default Body;