import React from "react";

class Profile extends React.Component {

    // Constructor is a place which is used for initialization. It is a best place to create state.
    constructor(props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            },
        }
        console.log("Child Inside Constuctor");
    }

    async componentDidMount() {
        // best place to make api calls

        const data = await fetch("https://api.github.com/users/iamsaqib24")
        const json = await data.json()
        this.setState({
            userInfo: json
        })

        console.log("Child componentDidMount");
    }

    render() {
        const {count} = this.state // destructured

        console.log("Child Inside Render");

        return (
            <div>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default Profile
