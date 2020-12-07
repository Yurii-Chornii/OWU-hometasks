import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/all-users/All-users";
import AllPosts from "./components/all-posts/All-posts";
import AllComments from "./components/all-comments/All-comments";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers/>
                <hr/>
                <AllPosts/>
                <hr/>
                <AllComments/>
            </div>
        );
    }
}

export default App;
