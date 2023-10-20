import RestaurrentCard, { withPromotedLabel } from "./RestaurrentCard";
import resList from "../utils/mock_data";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/useContext";

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
    // console.log(json)
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // if(listRestaurrent.length == 0){
  // return <Shimmer/>
  // } 

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check the internet connection, your are offline!!</h1>

  const { loggedInUser, setUserName } = useContext(UseContext);

  return listRestaurrent.length == 0 ? <Shimmer /> : (
    <div className="">
      <div className="flex mx-14 py-3">
        <div className="border-r-2 px-2 mx-3">

          <input className="mx-3 px-2" type="text" name="input" value={inputSearch} placeholder="Search" onChange={(e) => {
            SetInputSearch(e.target.value);
          }} />

          <button className="bg-slate-300 rounded-lg p-2" onClick={() => {
            const filterRestaurant = listRestaurrent.filter((res) => res.info.name.toLowerCase().includes(inputSearch))
            setFilterRest(filterRestaurant)
          }}>Search</button>

        </div>
        <button className="bg-slate-300 rounded-lg px-2" onClick={() => {
          console.log("clicked on rated button");
          const filteredRestaurant = listRestaurrent.filter(rate => rate.info.avgRating >= 4)
          setListOfRestaurants(filteredRestaurant)
        }}>Top Rated Restaurrents</button>

        <div >
          <label className="mx-4">UserName :</label>
          <input className="border border-black m-2 p-1" 
          value={loggedInUser} 
          onChange={(e) => setUserName(e.target.value)}></input>
        </div>

      </div>


      <div className="flex flex-wrap mx-20">
        {listRestaurrent.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? <RestaurrentCardPromoted resName={restaurant} /> : (
              <RestaurrentCard resName={restaurant} />
            )
            }
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Body;