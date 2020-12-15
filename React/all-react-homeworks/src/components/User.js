import React, {Component} from 'react';

class User extends Component {
    render() {
        let {number, elements} = this.props;
        let element = elements.find(value => value.id === +number)
        return (
            <div>
                {
                    element && <div>{element.id} - name: {element.name} - email: {element.email}</div>
                }

            </div>
        );
    }
}

export default User;
