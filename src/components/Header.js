import { useEffect, useState } from "react"
import Logo from '../assets/img/foodvilla.png'

const userLoggedIn = () => {
    return false
}


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

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Cart</li>
                </ul>
            </div>
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
