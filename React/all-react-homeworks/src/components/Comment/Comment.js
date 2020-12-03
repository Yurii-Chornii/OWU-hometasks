import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, chooseThisComment, showBody} = this.props;
        return (
            <div>
                {item.id} - {item.name} - {item.email}
                <button onClick={() => chooseThisComment(item.id)}>Choose me</button>
                <br/>
                {showBody && item.body}
            </div>
        );
    }
}

export default Comment;
