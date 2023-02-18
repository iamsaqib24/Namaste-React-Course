import { useState, useContext } from "react"
import Logo from '../assets/img/food-logo.png'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import store from "../utils/store"


const Title = () => (
    <a href="/">
        <img
            className="h-14 pt-5 px-5"
            src={Logo}
            alt="logo" />
    </a>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isOnline = useOnline()

    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);


    return (
        <div className="flex justify-between bg-slate-50 shadow-xl">
            <Title />

            <div className="nav-items">
                <ul className="flex py-6 font-medium text-slate-700 space-x-11">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">Cart - {cartItems.length}</Link>
                    </li>

                </ul>
            </div>
            {/* <h1>{isOnline ? "✅" : "🔴"}</h1> */}
            {/* <h1 className="p-5 font-bold text-purple-200">{user.name}</h1> */}
            <div>
                    {isLoggedIn ? (
                        <button className="font-medium p-2 m-4 hover:bg-slate-500 hover:border-2 text-gray-700 rounded-xl" onClick={() => setIsLoggedIn(false)}>Log Out</button>
                    ) : (
                        <button className="font-medium p-2 m-4 hover:bg-slate-500 hover:border-2 text-gray-700 rounded-xl" onClick={() => setIsLoggedIn(true)}>Log In</button>
                    )
                }
            </div>
        </div>
    )
}

export default Header
