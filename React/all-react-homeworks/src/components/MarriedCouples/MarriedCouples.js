import React, {Component} from 'react';
import MarriedCouple from "../MarriedCouple/MarriedCouple";

class MarriedCouples extends Component {
    state = {mans: [], womans: []}

    componentDidMount() {
        let {mans, womans} = this.props;
        this.setState({mans, womans})
    }

    findCouple = (mans, womans, index) => {
        let couples = [];
        mans.forEach((man) => {
            let woman = womans.find(woman => woman.id === man.id)
            couples.push({id: index, man, woman})
            index++
        })
        return couples;
    }

    render() {
        let {mans, womans} = this.props;
        let couples = this.findCouple(mans, womans, 1);
        // console.log(couples);
        return (
            <div>
                {couples.map(value => <MarriedCouple couple={value} key={value.id}/>)}
            </div>
        );
    }
}

export default MarriedCouples;
