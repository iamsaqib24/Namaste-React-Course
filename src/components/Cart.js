import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import FoodItem from './FoodItem'

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div>
        <h1 className="font-bold">Cart Items - {cartItems.length}</h1>
        <button className="p-2 m-5 bg-fuchsia-200" onClick={() => handleClearCart()}>Clear Cart</button>
        <div className="flex flex-wrap">
            {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
        </div>
    </div>
  )
}

export default Cart
