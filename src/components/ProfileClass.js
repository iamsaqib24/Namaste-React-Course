import React from "react";

class Profile extends React.Component {

    // Constructor is a place which is used for initialization. It is a best place to create state.
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
        console.log("Child Inside Constuctor");
    }

    componentDidMount() {
        // best place to make api calls
        console.log("Child componentDidMount");
    }

    render() {
        const {count} = this.state // destructured

        console.log("Child Inside Render");

        return (
            <div>
                <h2>Profile class component, {this.props.name}</h2>
                <h2>State variable with initial value: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                    })
                }}>SetCount</button>
            </div>
        )
    }
}

export default Profile
