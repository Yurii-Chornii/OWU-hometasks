import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {number, elements} = this.props;
        let element = elements.find(value => value.id === +number)
        return (
            <div>
                {
                    element && <div>{element.id} - title: {element.title} - body: {element.body}</div>
                }
            </div>
        );
    }
}

export default Post;
