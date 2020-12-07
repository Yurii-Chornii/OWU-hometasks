import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/all-users/All-users";
import AllPosts from "./components/all-posts/All-posts";
import AllComments from "./components/all-comments/All-comments";

class App extends Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
                <AllUsers/>
                <hr/>
                <h2>Posts</h2>
                <AllPosts/>
                <hr/>
                <h2>Comments</h2>
                <AllComments/>
                <br/><br/>
            </div>
        );
    }
}

export default App;
