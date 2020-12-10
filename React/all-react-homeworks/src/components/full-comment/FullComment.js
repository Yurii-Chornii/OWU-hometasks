import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";

class FullComment extends Component {
    state = {comment : null}
    commentService = new CommentService();
    async componentDidMount() {
        let {match: {params : {id}}} = this.props;
        const comment = await this.commentService.getPost(id);
        this.setState({comment})
    }

    render() {
        const {comment} = this.state;
        return (
            <div>
                {comment && <div>{comment.id} - {comment.name}<br/>{comment.email}<br/>{comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;
