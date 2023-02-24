import { CDN_URL } from "../constants"

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {


    return (
        <div className="w-64 p-5 m-5 h-80 bg-white shadow-sm hover:border">
            <img className="rounded-sm mb-2" src={ CDN_URL + cloudinaryImageId } />
            <h2 className="font-semibold  my-1 text-slate-900">{name}</h2>
            <h3 className="text-sm text-slate-600">{cuisines.join(", ")}</h3>
            <h4 className="text-sm mt-2">{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard
