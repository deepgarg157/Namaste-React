import { CDN_LINK } from "../utils/constants";

const RestaurrentCard = (props) => {
  const { resName } = (props);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo } = resName?.info
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_LINK + cloudinaryImageId} alt="res-logo"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo} costs</h4>
    </div>
  )
}

// high order components

export const withPromotedLabel = (RestaurrentCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="promoted">Promoted</label>
        <RestaurrentCard {...props}/>
      </div>
    )
  }
}

export default RestaurrentCard;