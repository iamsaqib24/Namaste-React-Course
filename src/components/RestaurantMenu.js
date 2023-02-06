import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CDN_URL } from "../constants"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const {id} = useParams()

    const restaurant = useRestaurant(id)

  return (!restaurant) ? (<Shimmer />) : (
    <>
        <div>
            <h1>Restaurant id : {id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={ CDN_URL + restaurant?.cloudinaryImageId } />
            {/* <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ytxglcbv0blbugivcb73" alt="" srcset="" /> */}
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
        </div>
        <div>
            <h1>Menu Lists</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item) => ( <li key={item.id}>{item.name}</li> ))}
            </ul>
        </div>
    </>
  )
}

export default RestaurantMenu
