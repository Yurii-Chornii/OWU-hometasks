import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, showBtn, chosenOne} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                {showBtn && <button onClick={() => chosenOne(item.id)}>Choose me</button>}
            </div>
        );
    }
}

export default User;
