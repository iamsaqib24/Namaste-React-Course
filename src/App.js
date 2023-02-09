import React, { Children, lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import { CDN_URL } from './constants'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer'
// import Instamart from './components/Instamart'

const Instamart = lazy(() => import('./components/Instamart'))
// on demand loading -> upon render -> suspend loading

const Page = () => {

    const [user, setUser] = useState({
        name: "Saqib",
        email: "iamsaqib24@gmail.com"
    })

    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Page />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body user={{
                    name: "Foodvilla",
                    email: "foodvilla@foodvilla.com"
                }} />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
