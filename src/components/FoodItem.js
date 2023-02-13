import { CDN_URL } from "../constants"


const FoodItem = ({name, description, cloudinaryImageId, price}) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-purple-200">
            <img src={ CDN_URL + cloudinaryImageId } />
            <h2 className="font-bold">{name}</h2>
            <h3>{description}</h3>
            <h4>Rupess: {price/100}</h4>
        </div>
  )
}

export default FoodItem
