import RestaurrentCard from "./RestaurrentCard";
import resList from "../utils/mock_data";
import { useState } from "react";

const Body = () => {

  // Local state variables - super power variable

  let [listRestaurrent, setListOfRestaurants] = useState(resList)

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

  return (
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