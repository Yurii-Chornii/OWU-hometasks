import React, {Component} from 'react';
import SearchService from "../services/SearchService";
import User from "./User";

class UserSearch extends Component {
    state = {users : []}
    searchService = new SearchService();
    componentDidMount() {
        const {number, match: {path}} = this.props;
        this.searchService.getElement(path, number).then(users => this.setState({users}))
    }

    render() {
        const {users} = this.state;
        const {number} = this.props;
        return (
            <div className={'searchArea'}>
                <h3>User</h3>
                {number && <User number={number} elements={users}/>}
            </div>
        );
    }
}

export default UserSearch;
