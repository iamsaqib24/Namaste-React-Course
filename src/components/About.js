import React from 'react'
import Profile from "../components/Profile"
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <p>Chapter-07 - Finding the Path</p>
        <Outlet />
        {/* <Profile /> */}
    </div>
  )
}

export default About
