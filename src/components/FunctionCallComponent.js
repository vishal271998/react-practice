import React, {Component} from "react";

export default class FunctionCallComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }
    user(){
        return "Here is your first function call result";
    }
    checkLogin(loggedIn){
        if(loggedIn){
            return "You are sucessfully logged in."
        }else{
            return <a href="login">Login</a>
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loggedIn: true})
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>My first function call result is. { this.user() }</p>

                <p>{ this.checkLogin(this.state.loggedIn) }</p>
            </div>
        );
    }
}