import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item} = this.props;
        // console.log(item)
        return (
            <div>
                {item.id} - {item.name}
                <button>Choose me</button>

            </div>
        );
    }
}

export default Comment;
