import { useEffect, useState } from "react";
import resList from "../utils/mock_data";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)


    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, avgRating, costForTwo } = resInfo.cards[0].card.card.info

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) =>
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ${item.card.info.price / 100 || item.card.info.defaultPrice /100}</li>)}
            </ul>
        </div>
    )
}

// High order components

export const withPromotedRest = (RestaurantMenu) => {
    return () => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantMenu />
            </div>
        )
    }
}

export default RestaurantMenu;