import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div className="retaurant-list">
            {
                restaurantList.map(restaurant => <RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
            }
        </div>
    )
}

export default Body
