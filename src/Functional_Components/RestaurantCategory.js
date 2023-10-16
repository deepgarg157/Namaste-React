import ItemsList from "./ItemList";

const RestaurantCategory = ({data})=>{
console.log(data)
    return (
        <div className="category">
            {/* headers */}
            <div>
            <span>{data.title} ({data.itemCards.length})</span>
            <span><img className="dowm-arrow" src="https://symbl-world.akamaized.net/i/webp/38/9aa4151972abf59344d01195bb967e.webp"></img></span>
            </div>
            {/* accordion body*/}
            <ItemsList items = {data.itemCards}/>
        </div>
    )
}

export default RestaurantCategory;