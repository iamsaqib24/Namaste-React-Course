import { CDN_URL } from "../constants"

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return (
        <div className="card">
            <img src={ CDN_URL + cloudinaryImageId } />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard