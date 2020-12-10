import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import PeopleService from "../services/PeopleService";
import Man from "../man/Man";
import FullMan from "../full-man/FullMan";


class AllPeople extends Component {
    state = {people : []}
    peopleService = new PeopleService();

    async componentDidMount() {
        let people = await this.peopleService.getPeople();
        let id = 0;
        people.forEach((value) => value.id = ++id)
        this.setState({people});
    }

    render() {
        const {people} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {people.map(value => <Man item={value} key={value.name}/>)}
                <br/>
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params : {id}}} = props;
                            return <FullMan {...props} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPeople);
