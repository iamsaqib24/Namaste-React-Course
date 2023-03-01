import { restaurantList, SWIGGY_API } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import { filterData } from '../utils/Helper'
import useOnline from '../utils/useOnline'

// you can write "props.user" instead of "{user}"
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        try {
            const data = await fetch(SWIGGY_API)
            const json = await data.json()
            // console.log(json);
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        } catch (error) {
            console.error(error);
        }
    }

    // useOnline hook,
    // const isOnline = useOnline()

    // if(!isOnline) {
    //     return <h1>Oops, please check your internet connection</h1>
    // }






    // not rendering component (Early return)
    if(!allRestaurants) return null

    // if(filteredRestaurants?.length === 0) return <h1>No match found</h1>


    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <div className="flex flex-col">
            <div className="text-center my-10">
                <input
                    type="text"
                    placeholder="Search for restaurant"
                    className="border border-gray-400 p-3 h-10 mt-2 mb-2 w-2/5 outline-none"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                        if (searchInput == "") {
                            setFilteredRestaurants(allRestaurants)
                        } else {
                            setFilteredRestaurants(filterData(e.target.value, allRestaurants))
                        }
                    }}
                />

                {/* <button
                    className="p-2 bg-sky-900 hover:bg-purple-500 hover:border-2 text-white rounded-r-xl"
                    onClick={() => {
                        const data = filterData(searchInput, allRestaurants)
                        setFilteredRestaurants(data)
                    }}
                >Search</button> */}
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurants.map(restaurant => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id } key={restaurant.data.id} >
                                <RestaurantCard {...restaurant.data} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body
