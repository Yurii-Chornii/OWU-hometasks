import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, chosenOne, showBtn} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                {showBtn && <button onClick={() => chosenOne(item.id)}>Choose me</button>}
            </div>
        );
    }
}

export default Comment;
