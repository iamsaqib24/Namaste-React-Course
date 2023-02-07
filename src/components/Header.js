import { useEffect, useState } from "react"
import Logo from '../assets/img/foodvilla.png'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"


const Title = () => (
    <a href="/">
        <img
            className="logo"
            src={Logo}
            alt="logo" />
    </a>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isOnline = useOnline()

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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
