import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { CDN_URL } from "../constants"
import { addItem } from "../utils/cartSlice"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const {id} = useParams()

    const restaurant = useRestaurant(id)

    const dispatch = useDispatch()

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }


  return (!restaurant) ? (<Shimmer />) : (
    <div className="flex">
        <div>
            <h1>Restaurant id : {id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={ CDN_URL + restaurant?.cloudinaryImageId } />
            {/* <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ytxglcbv0blbugivcb73" alt="" srcset="" /> */}
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
        </div>
        {/* <div>
            <button className="p-2 m-5 bg-purple-500" onClick={() => handleAddItem()}>Add item</button>
        </div> */}
        <div className="p-5">
            <h1>Menu Lists</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item) => ( <li key={item.id}>{item.name} - <button className="p-1 bg-fuchsia-200" onClick={() => addFoodItem(item)}>add</button></li> ))}
            </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu
