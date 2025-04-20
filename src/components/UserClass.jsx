import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="user">
                <h2>Name: {this.props.name}</h2>
                <h3>Contact: abhilash086</h3>
                <h4>Location: Bengaluru</h4>
                <p>Portfolio: Green</p>
            </div>
        )
    }
}

export default UserClass