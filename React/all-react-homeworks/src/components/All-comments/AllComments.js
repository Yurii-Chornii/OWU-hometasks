import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";
import Comment from "../Comment/Comment";
import {Switch, Route} from "react-router-dom";


class AllComments extends Component {
    state = {comments : []}
    commentService = new CommentService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}
                <br/>
                <div>
                    <Switch>
                        <Route path={'/comments/:id'} render={() => {

                            return 'comments'
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllComments;
