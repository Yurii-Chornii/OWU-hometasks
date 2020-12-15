import React, {Component} from 'react';
import './App.css';
import UserService from "./services/userService";
import Users from "./components/Users";
import {Context} from "./services/ContextService";

class App extends Component {
    state = {users: []}
    userService = new UserService();

    componentDidMount() {
        this.userService.getUsers().then(value => this.setState({users: value}))
    }

    render() {
        let {users} = this.state;
        return (
            <Context.Provider value={'бла бла бла'}>
                <div>
                    <Users items={users}/>
                </div>
            </Context.Provider>
        );
    }
}

export default App;
