import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { CDN_URL, CART_EMPTY } from "../constants"
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

    console.log(restaurant);

  return (!restaurant) ? (<Shimmer />) : (



    <div>
        <div className="flex bg-gray-900">
            <img className="h-48 m-5 p-5" src={ CDN_URL + restaurant?.cloudinaryImageId } />

            <div className="flex flex-col justify-evenly">
                <h2 className="font-bold text-white">{restaurant?.name}</h2>
                <h3 className="font-bold text-white">{restaurant?.area}</h3>
                <h3 className="font-bold text-white">{restaurant?.avgRating} stars</h3>
            </div>
        </div>

            {/* <h1 className="font-bold text-white">Restaurant id : {id}</h1> */}
            {/* <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ytxglcbv0blbugivcb73" alt="" srcset="" /> */}
            {/* <h3 className="font-bold text-white">{restaurant?.city}</h3> */}




        <div className="flex justify-center">

            <div className="p-10 w-2/4">
                <h1 className="font-bold">Menu Lists</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => ( <li key={item.id}>{item.name} - <button className="p-2 bg-gray-500 rounded-md text-white" onClick={() => addFoodItem(item)}>add</button></li> ))}
                </ul>
            </div>

            <div className="p-10 ">
                <h1 className="text-gray-500 font-bold mb-5 text-3xl">Cart Empty</h1>
                <img className="h-52" src={CART_EMPTY} alt={"empty cart"} />
                <h2 className="text-gray-400">Good food is always cooking!</h2>
                <h2 className="text-gray-400">Go ahead, order some yummy items from the menu.</h2>
            </div>

        </div>

    </div>
  )
}

export default RestaurantMenu
