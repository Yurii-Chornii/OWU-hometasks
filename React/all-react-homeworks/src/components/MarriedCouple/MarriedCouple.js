import React, {Component} from 'react';

class MarriedCouple extends Component {
    render() {
        let {couple} = this.props;
        return (
            <div>
                {couple.man.name} - {couple.man.age} y.o. + {couple.woman.name} - {couple.woman.age} y.o.
            </div>
        );
    }
}

export default MarriedCouple;
