import React, {Component} from 'react';
import Woman from "../Woman/Woman";


class Womans extends Component {
    state = {
        womansState: [
            {id:5,name: 'anya', age: 29, status: true},
            {id:4,name: 'alina', age: 15, status: false},
            {id:3,name: 'ira', age: 31, status: true},
            {id:2,name: 'diana', age: 22, status: false},
            {id:1,name: 'yulia', age: 21, status: true}
        ]
    }
    componentDidMount() {
        let {getWomans} = this.props;
        getWomans(this.state.womansState);
    }

    render() {
        let {womansState} = this.state;
        return (
            <div>
                {womansState.map(value => <Woman key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Womans;
