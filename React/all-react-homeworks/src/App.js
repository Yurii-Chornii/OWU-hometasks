import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserSearch from "./components/UserSearch";
import PostsSearch from "./components/PostsSearch";
import CommentsSearch from "./components/CommentsSearch";


class App extends Component {
    state = {controlNumber: '', chosenNumber : null, maxInputValue : 10};
    numberForm = React.createRef();

    render() {
        return (
            <Router>
                <div className={'header'}>
                    <h2>Виберіть сутність:</h2>
                    <div>
                        <Link className={'navBtn'} to={'/user'} onClick={() => this.setMaxInputValue(10)}>User</Link>
                        <Link className={'navBtn'} to={'/post'} onClick={() => this.setMaxInputValue(100)}>Post</Link>
                        <Link className={'navBtn'} to={'/comment'} onClick={() => this.setMaxInputValue(500)}>Comment</Link>
                    </div>
                    <h2>Введіть число:</h2>
                    <form ref={this.numberForm} onSubmit={this.chooseNumber}>
                        <input type="number" min={1} max={this.state.maxInputValue} onInput={this.saveNumber} value={this.state.controlNumber}/>
                        <button>Search</button>
                    </form>
                </div>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return "Виберіть сутність"
                    }}/>
                    <Route exact path={'/user'} render={(props) => {
                        return <UserSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                    <Route exact path={'/post'} render={(props) => {
                        return <PostsSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                    <Route exact path={'/comment'} render={(props) => {
                        return <CommentsSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                </Switch>
            </Router>
    );
    }

    setMaxInputValue = (maxInputValue) => {
        this.setState({controlNumber : ''})
        this.setState({chosenNumber : null})
        this.setState({maxInputValue})
    }
    saveNumber = (e) => {
        this.setState({controlNumber : e.target.value})
    }

    chooseNumber = (e) => {
        e.preventDefault();
        // console.log(this.numberForm.current[0].value)
        this.setState({chosenNumber : this.numberForm.current[0].value})
    }
}

export default App;
