import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {number, elements} = this.props;
        let element = elements.find(value => value.id === +number)
        console.log(element)
        return (
            <div>
                {
                    element && <div>{element.id} - name: {element.name} - body: {element.body}</div>
                }
            </div>
        );
    }
}

export default Comment;
