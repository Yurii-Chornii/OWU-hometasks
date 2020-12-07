import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {CommentsService} from "../../services/CommentsService";

class AllComments extends Component {
    commentService = new CommentsService();

    state = {comments: [], chosenComment: null}

    chosenOne = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({chosenComment: value}))
    }

    componentDidMount() {
        this.commentService.getAllComments().then(value => this.setState({comments: value}))
    }

    render() {
        let {comments, chosenComment} = this.state;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id} chosenOne={this.chosenOne} showBtn={true}/>)}
                <hr/>
                {chosenComment && <Comment item={chosenComment}/>}
            </div>
        );
    }
}

export default AllComments;
