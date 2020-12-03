import React, {Component} from 'react';
import User from "../User/User";
import './All-users.css';

class AllUsers extends Component {
    state = {users: [], classState: 'one', chosenUser: null}
    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
    }

    changeColor = () => {
        this.flag = !this.flag;
        if (this.flag) {
            this.setState({classState: 'two'});
        } else {
            this.setState({classState: 'one'});
        }

    }

    selectThisUser = (id) => {
        let chosenUser = this.state.users.find(value => value.id === id);
        this.setState({chosenUser});
    }

    render() {
        let {users, classState, chosenUser} = this.state
        return (
            <div>
                <h1 className={classState} onClick={this.changeColor}>All users page</h1>
                {
                    users.map(value => (<User item={value} key={value.id} selectThisUser={this.selectThisUser}/>))
                }
                <hr/>
                {
                    chosenUser && <User item={chosenUser}/>
                }
            </div>
        );
    }
}

export default AllUsers;
