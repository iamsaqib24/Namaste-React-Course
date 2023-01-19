import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import { CDN_URL } from './constants'


const Page = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Page />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
