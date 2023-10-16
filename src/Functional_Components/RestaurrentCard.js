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
    <div className="bg-slate-200 m-2 p-2 w-62 rounded-lg">
      <img className="w-48" src={CDN_LINK + cloudinaryImageId} alt="res-logo"></img>
      <h3 className="w-32 px-2 font-bold my-2">{name}</h3>
      <h4 className="w-48 px-2 text-green-500">{cuisines.join(", ")}</h4>
      <h4 className="px-2">{avgRating} Rating</h4>
      <h4 className="px-2">{costForTwo} costs</h4>
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