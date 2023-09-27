import RestaurrentCard from "./RestaurrentCard";
import resList from "../utils/mock_data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  // Local state variables - super power variable

  let [listRestaurrent, setListOfRestaurants] = useState([])

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
  }

  // if(listRestaurrent.length == 0){
  // return <Shimmer/>
  // } 

  return listRestaurrent.length == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listRestaurrent.filter(rate => rate.info.avgRating > 4)
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurrents</button>
      </div>
      <div className="res-container">
        {listRestaurrent.map((restaurant) => (<RestaurrentCard resName={restaurant} />))}
      </div>
    </div>
  )
}

export default Body;