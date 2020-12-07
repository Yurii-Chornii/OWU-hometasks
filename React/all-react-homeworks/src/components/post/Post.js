import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, showBtn, choosePost} = this.props;
        return (
            <div>
                {item.id} - {item.title}
                {showBtn && <button onClick={() => choosePost(item.id)}>Chose me</button>}
            </div>
        );
    }
}

export default Post;
