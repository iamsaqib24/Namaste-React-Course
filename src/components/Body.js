import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import { filterData } from '../utils/Helper'
import useOnline from '../utils/useOnline'


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // useOnline hook,
    const isOnline = useOnline()

    if(!isOnline) {
        return <h1>Oops, please check your internet connection</h1>
    }

    // not rendering component (Early return)
    if(!allRestaurants) return null

    // if(filteredRestaurants?.length === 0) return <h1>No match found</h1>


    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="search"
                    className="search-input"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchInput, allRestaurants)
                        setFilteredRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="retaurant-list">
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
        </>
    )
}

export default Body
