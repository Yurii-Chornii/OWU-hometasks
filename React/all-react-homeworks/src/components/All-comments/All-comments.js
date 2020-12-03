import React, {Component} from 'react';
import Comment from "../Comment/Comment";

class AllComments extends Component {
    state = {comments : [], chosenComment : null}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => {
                this.setState({comments})
            })
    }

    chooseThisComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id);
        this.setState({chosenComment})
    }

    render() {
        let {comments, chosenComment} = this.state;
        return (
            <div>
                <h2>All comments page</h2>
                {
                    comments.map(value => <Comment key={value.id} item={value} chooseThisComment={this.chooseThisComment} showBody={false}/>)
                }
                <hr/>
                {
                    chosenComment && <Comment item={chosenComment} showBody={true}/>
                }
            </div>
        );
    }
}

export default AllComments;
