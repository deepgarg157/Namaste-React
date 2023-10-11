import { useEffect, useState } from "react";
import resList from "../utils/mock_data";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    const { Username, cuisines, id, avgRating } = resInfo[0].info
    return (
        <div>
            <h2>{Username}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{id}</h4>
            <h4>{avgRating}</h4>
            <h3>Menu</h3>
            <h4>cuisines</h4>
            <h4>avgRating</h4>
            <h4>costForTwo</h4>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Chaap Masala</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;