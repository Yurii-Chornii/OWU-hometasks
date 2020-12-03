import React, {Component} from 'react';
import Man from "../Man/Man";

class Mans extends Component {
    state = {
        mansState : [
            {id:1,name: 'andrey', age: 50, status: false},
            {id:2,name: 'viktor', age: 25, status: true},
            {id:3,name: 'nazar', age: 39, status: true},
            {id:4,name: 'sasha', age: 18, status: false},
            {id:5,name: 'yura', age: 41, status: false}
            ]
    }
    componentDidMount() {
        let {getMans} = this.props;
        getMans(this.state.mansState);
    }

    render() {
        let {mansState} = this.state;
        return (
            <div>
                {mansState.map(value => <Man key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Mans;
