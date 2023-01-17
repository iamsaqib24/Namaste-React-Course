import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchInput))
}

const Body = () => {


    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }


    return (
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
                        const data = filterData(searchInput, restaurants)
                        setRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="retaurant-list">
                {
                    restaurants.map(restaurant => <RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
                }
            </div>
        </>
    )
}

export default Body
