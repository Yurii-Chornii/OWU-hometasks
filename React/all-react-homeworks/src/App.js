import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";


class App extends Component {
    render() {
        return (
            <div className={'wrapper'}>

                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="">React</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {/*<Router>*/}
                                    <div className={"linksWrapper"}>
                                        <Link className="nav-link active" aria-current="page" to={'/home'}>
                                            Home
                                        </Link>
                                        <Link className="nav-link" to={'/users'}>
                                            Users
                                        </Link>
                                    </div>
                                    {/*</Router>*/}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className={'main'}>
                        <Switch>
                            <Route path={'/home'} render={() => {
                                return <Home/>
                            }}/>
                            <Route path={'/users'} render={() => {
                                return <Users/>
                            }}/>
                        </Switch>
                    </div>
                </Router>




            </div>
        );
    }
}

export default App;
