import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1", {className: "heading"}, "Namaste React")

// const heading2 = React.createElement("h2", {className: "heading"}, "Igniting our App")

// const container = React.createElement("div", {className: "container"}, [heading, heading2])

// Lecture - 04 - Talk is cheap, show me the code


const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
            alt="logo" />
    </a>
)

const Header = () => {
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
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/siiyygdsewrchwglfyre" alt="" />
            <h2>Aar Kay Dhaba</h2>
            <h3>North Indian, South Indian</h3>
            <h4>4.3 stars</h4>
        </div>
    )
}


const Body = () => {
    return (
        <RestaurantCard />
    )
}

const Footer = () => {
    return (
        <h2>Footer</h2>
    )
}

const Page = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
