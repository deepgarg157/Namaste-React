import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import resList from "./mock_data";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch( MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data);
    };

  return resInfo;
};

export default useRestaurantMenu;