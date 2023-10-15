import RestaurrentCard, { withPromotedLabel } from "./RestaurrentCard";
import resList from "../utils/mock_data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  // Local state variables - super power variable
  // hooks useState
  const [listRestaurrent, setListOfRestaurants] = useState([]);
  const [filterRest, setFilterRest] = useState([]);

  const [inputSearch, SetInputSearch] = useState("");

  const RestaurrentCardPromoted = withPromotedLabel(RestaurrentCard);

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6302312&lng=77.4349177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // if(listRestaurrent.length == 0){
  // return <Shimmer/>
  // } 

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check the internet connection, your are offline!!</h1>

  return listRestaurrent.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search-container">

          <input type="text" name="input" className="input" value={inputSearch} onChange={(e) => {
            SetInputSearch(e.target.value);
          }} />

          <button onClick={() => {
            const filterRestaurant = listRestaurrent.filter((res) => res.info.name.toLowerCase().includes(inputSearch))
            setFilterRest(filterRestaurant)
          }}>Search</button>

        </div>
        <button className="filter-btn" onClick={() => {
          console.log("clicked on rated button");
          const filteredRestaurant = listRestaurrent.filter(rate => rate.info.avgRating >= 4)
          setListOfRestaurants(filteredRestaurant)
        }}>Top Rated Restaurrents</button>

      </div>
      <div className="res-container">
        {listRestaurrent.map((restaurant)=>(
          <Link
          to="/restaurant/:resId"
          key={restaurant.info.id}
          >
            {restaurant.info.promoted ? <RestaurrentCardPromoted resName ={restaurant} />  : (
                <RestaurrentCard resName ={restaurant}/>
              )
            }
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Body;