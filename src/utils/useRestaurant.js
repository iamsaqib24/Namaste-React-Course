import { useState, useEffect } from "react"

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=31.3260152&lng=75.57618289999999&menuId=" + id)

        const json = await data.json()
        // console.log(json.data)
        setRestaurant(json.data)
    }

    // return restaurant data
    return restaurant
}

export default useRestaurant
