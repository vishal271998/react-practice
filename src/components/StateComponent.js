import React, {Component} from "react";

export default class  StateComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type: "State",
            name: "test",
            email: "test@gmail.com",
            age: "10"
        };
    }

    static getDerivedStateFromProps(props){
        if(props.name) {
            return {
                type: props.type,
                name: props.name,
                email: props.email,
                age: props.age
            }
        }
    }

    componentDidMount() {
        this.state = {notification : "Roger"}
        setTimeout(() => {
            this.setState({notification: "Roger"})
        }, 1000)
    }

    render(){
        return (
            <div>
                <h1>Hello {this.state.notification }!</h1>
                <h3>This Data comes from { this.state.type }</h3>
                <h3>Your Name { this.state.name }</h3>
                <h3>Your Email { this.state.email }</h3>
                <h3>Your Age { this.state.age }</h3>
            </div>
        )
    }
}