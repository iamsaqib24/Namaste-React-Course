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

        this.timer = setInterval(() => {
            console.log("Namaste");
        }, 1000)

        console.log("Child componentDidMount");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {

        clearInterval(this.timer)
        console.log("component will unmount");
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
