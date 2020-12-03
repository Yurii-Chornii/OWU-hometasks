import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/All-users/All-users";
import AllPosts from "./components/All-posts/All-posts";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers/>
                <hr/><br/>
                <AllPosts/>
                <hr/><br/>

            </div>
        );
    }
}

export default App;
