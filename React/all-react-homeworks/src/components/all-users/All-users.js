import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";
import User from "../user/User";

class AllUsers extends Component {
    state = {users: [], chosenUser : null}
    usersService = new UsersService();

    chosenOne = (id) => {
        this.usersService.getUserByUd(id).then(value => this.setState({chosenUser : value}));
    }

    componentDidMount() {
        this.usersService.getAllUsers().then(value => this.setState({users : value}))
    }

    render() {
        let {users, chosenUser} = this.state;
        return (
            <div>
                {users.map(value => <User key={value.id} item={value} showBtn={true} chosenOne={this.chosenOne}/>)}
                <hr/>
                {chosenUser && <User item={chosenUser}/>}
            </div>
        );
    }
}

export default AllUsers;
