import React, {Component} from 'react';

class Woman extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.name} - {item.age} y.o.
            </div>
        );
    }
}

export default Woman;
