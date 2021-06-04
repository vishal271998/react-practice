import React from "react";
import {Component} from "react";
import Users from "../Users";

export default class UserListAPI extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <Users users={this.state.contacts} />
        )
    }
}