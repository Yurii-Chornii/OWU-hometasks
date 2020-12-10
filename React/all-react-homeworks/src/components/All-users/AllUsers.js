import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../User/User";
import FullUser from "../full-user/FullUser";
import {Route, Switch, withRouter} from "react-router-dom";

class AllUsers extends Component {
    state = {users: []}
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {users.map(value => <User key={value.id} item={value} showBtn={true}/>)}
                <br/>
                <div>
                    <Switch>
                        <Route path={'/users/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullUser {...props} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
