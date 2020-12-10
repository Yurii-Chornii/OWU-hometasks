import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/All-users/AllUsers";
import AllPosts from "./components/All-posts/AllPosts";
import AllComments from "./components/All-comments/AllComments";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AllPeople from "./components/all-people/AllPeople";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>
                            comments
                        </Link>
                    </div>
                    <div>
                        <Link to={'/people'}>
                            people
                        </Link>
                    </div>

                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <AllComments/>
                        }}/>
                        <Route path={'/people'} render={() => {
                            return <AllPeople/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
