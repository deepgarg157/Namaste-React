import { useEffect, useState } from "react";
import resList from "../utils/mock_data";

const RestaurantMenu = () => {

    const restMenuInfo=[
        {
            "id": "641038",
            "name": "Biryani Mahal",
            "avgRating": 4,
            "cloudinaryImageId": "jgyhyl8ttz7owvit7liu",
            "locality": "Shahberi",
            "areaName": "crossing republic",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Indian",
              "Chinese"]
        }
]

    const [resInfo, setResInfo] = useState(null)

    // useEffect(() => {
    //     fetchMenu()
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json()
    //     console.log(json);
    //     setResInfo(resList)
    //     console.log(resInfo);
    // }


    return (
        <div>
            <h2>{restMenuInfo[0].name}</h2>
            <h3>Menu</h3>
            <h4>{restMenuInfo[0].cuisines.join(", ")}</h4>
            <h4>{restMenuInfo[0].avgRating}</h4>
            <h4>{restMenuInfo[0].costForTwo}</h4>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Chaap Masala</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;