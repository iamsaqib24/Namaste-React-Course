import { CDN_URL } from "../constants"

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {


    return (
        <div className="w-56 p-5 m-5 bg-slate-50 bg-white-100 shadow-xl">
            <img className="rounded-sm" src={ CDN_URL + cloudinaryImageId } />
            <h2 className="font-bold my-1 text-slate-700">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard
