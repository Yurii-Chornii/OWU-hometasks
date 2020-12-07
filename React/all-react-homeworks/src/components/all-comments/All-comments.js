import React, {Component} from 'react';
import {CommentsService} from "../../services/CommentsService";
import Comment from "../comment/Comment";

class AllComments extends Component {
    state = {comments: [], chosenComment: null}

    commentServise = new CommentsService();

    componentDidMount() {
        this.commentServise.getAllComments().then(value => this.setState({comments : value}))
    }
    chosenOne(id){
        this.commentServise.getCommentById(id).then(value => this.setState({chosenComment : value}))
    }

    render() {
        let {comments, chosenComment} = this.state;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id} />)}
                <hr/>
                {chosenComment && <Comment item={chosenComment}/>}
            </div>
        );
    }
}

export default AllComments;
