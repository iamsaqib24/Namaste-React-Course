import { useEffect, useState } from "react"
import Logo from '../assets/img/foodvilla.png'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"


const Title = () => (
    <a href="/">
        <img
            className="h-28 p-2"
            src={Logo}
            alt="logo" />
    </a>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isOnline = useOnline()

    return (
        <div className="flex justify-between bg-sky-900 sm:bg-sky-600 md:bg-sky-300">
            <Title />

            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
            </div>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            )
        }
        </div>
    )
}

export default Header
