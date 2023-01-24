import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from "./ProfileClass"

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <p>Chapter-07 - Finding the Path</p>
        <Outlet />
        <Profile name="Saqib" />
    </div>
  )
}

export default About
