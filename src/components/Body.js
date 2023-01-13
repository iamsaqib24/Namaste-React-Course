import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchInput))
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchInput, setSearchInput] = useState("")

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
