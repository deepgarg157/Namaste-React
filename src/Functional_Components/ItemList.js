import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items?.map((item) =>
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹{item?.card?.info?.price / 100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                    </div>

                    <div className="w-3/12 p-4">

                        <div className="absolute px-4 text-green-500 bg-white rounded-lg my-20 mx-7 font-bold cursor-pointer" >
                            <button onClick={()=>handleAddItem(item)}>ADD+</button>
                        </div>

                        <img src={CDN_LINK + item?.card?.info?.imageId} ></img>
                    </div>

                </div>
            )}
        </div>
    )
}

export default ItemsList; 
