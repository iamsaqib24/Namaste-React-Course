import React from 'react'
import { useSelector } from 'react-redux'
import FoodItem from './FoodItem'

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)

  return (
    <div>
        <h1 className="font-bold">Cart Items - {cartItems.length}</h1>
        <div className="flex flex-wrap">
            {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
        </div>
    </div>
  )
}

export default Cart
