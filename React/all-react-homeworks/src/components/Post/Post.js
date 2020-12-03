import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, choseThisPost, showBody} = this.props;
        return (
            <div>
                {item.id} - {item.title}
                <button onClick={() => choseThisPost(item.id)}>Chose me</button>
                <br/>
                {showBody && item.body}
            </div>
        );
    }
}

export default Post;
