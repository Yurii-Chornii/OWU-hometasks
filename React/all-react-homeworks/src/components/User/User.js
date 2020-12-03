import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, selectThisUser} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                <button onClick={() => selectThisUser(item.id)}>Chose me</button>
            </div>
        );
    }
}

export default User;
