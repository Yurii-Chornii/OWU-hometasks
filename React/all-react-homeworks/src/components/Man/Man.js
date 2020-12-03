import React, {Component} from 'react';

class Man extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.name} - {item.age} y.o.
            </div>
        );
    }
}

export default Man;
