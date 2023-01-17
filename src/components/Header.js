import { useState } from "react"

const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
            alt="logo" />
    </a>
)

const Header = () => {

    const [title, setTitle] = useState("Intial-Title")

    return (
        <div className="header">
            <Title />

            <h1>{title}</h1>
            <button onClick={() => setTitle("New-Title")}>changeTitle</button>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
