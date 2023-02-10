import { useState, useContext } from "react"
import Logo from '../assets/img/foodvilla.png'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import store from "../utils/store"


const Title = () => (
    <a href="/">
        <img
            className="h-14 pt-5 px-3 rounded-full"
            src={Logo}
            alt="logo" />
    </a>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isOnline = useOnline()

    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)


    return (
        <div className="flex justify-between bg-purple-800 sm:bg-purple-700 md:bg-purple-600">
            <Title />

            <div className="nav-items">
                <ul className="flex py-6 text-white space-x-11">
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
                    <li className="px-2">Cart - {cartItems.length}</li>
                </ul>
            </div>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            <h1 className="p-5 font-bold text-purple-200">{user.name}</h1>
            {isLoggedIn ? (
                <button className="p-2 m-2 bg-sky-900 hover:bg-purple-500 hover:border-2 text-white rounded-xl" onClick={() => setIsLoggedIn(false)}>Log Out</button>
            ) : (
                <button className="p-2 m-2 bg-sky-900 hover:bg-purple-500 hover:border-2 text-white rounded-xl" onClick={() => setIsLoggedIn(true)}>Log In</button>
            )
        }
        </div>
    )
}

export default Header
