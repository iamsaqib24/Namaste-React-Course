import { CDN_URL } from "../constants"

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {


    return (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-purple-200">
            <img src={ CDN_URL + cloudinaryImageId } />
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard
