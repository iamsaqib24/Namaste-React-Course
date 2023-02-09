import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from "./ProfileClass"
import UserContext from '../utils/UserContext'

// const About2 = () => {
//   return (
//     <div>
//         <h1>About Us</h1>
//         <p>Chapter-07 - Finding the Path</p>
//         <Outlet />
//         <Profile name="Saqib" />
//     </div>
//   )
// }

class About extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent - Inside Constructor");
    }

    componentDidMount() {
        // best place to make api calls
        console.log("Parent - componentDidMount");
    }

    render() {

        console.log("Parent - Inside Render");

        return (
            <div>
                <h1>About Us</h1>

                <UserContext.Consumer>
                    {/* {(value) => console.log(value)} */}
                    {({user}) => <h1 className="font-bold">{user.name}</h1>}
                </UserContext.Consumer>

                <p>Chapter-07 - Finding the Path</p>
                {/* <Outlet /> */}
                <Profile name={"Saqqu"} />
                {/* <Profile name={"Saqqu 22"} /> */}
            </div>
        )
    }
}

export default About
