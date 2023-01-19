import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import { CDN_URL } from './constants'
import Contact from './components/Contact'


const Page = () => {
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
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
