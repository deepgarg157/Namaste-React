import RestaurrentCard from "./RestaurrentCard";
import resList from "../utils/mock_data";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
         {resList.map((restaurant)=>(<RestaurrentCard resName={restaurant}/>))};
        </div>
      </div>
    )
  }

  export default Body;