import React, {Component} from 'react';
import PeopleService from "../services/PeopleService";

class FullMan extends Component {
    state = {man: null}
    peopleService = new PeopleService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let man = await this.peopleService.getMan(id)
        this.setState({man})
    }

    render() {
        let {man} = this.state;
        return (
            <div>
                {man && <div>{man.name} - {man.height} - {man.mass} - {man.hair_color} - {man.skin_color}</div>}
            </div>
        );
    }
}

export default FullMan;
