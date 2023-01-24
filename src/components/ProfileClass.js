import React from "react";

class Profile extends React.Component {

    // Constructor is a place which is used for initialization. It is a best place to create state.
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            count2: 2,
        }
    }

    render() {
        const {count} = this.state // destructured

        return (
            <div>
                <h2>Profile class component, {this.props.name}</h2>
                <h2>State variable with initial value: {count}</h2>
                <h3>Another state variable: {this.state.count2}</h3>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                        count2: 4,
                    })
                }}>SetCount</button>
            </div>
        )
    }
}

export default Profile
