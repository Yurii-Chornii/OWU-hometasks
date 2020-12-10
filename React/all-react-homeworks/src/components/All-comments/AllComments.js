import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";
import Comment from "../Comment/Comment";
import {Switch, Route, withRouter} from "react-router-dom";
import FullComment from "../full-comment/FullComment";


class AllComments extends Component {
    state = {comments: []}
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
                        <Route path={'/comments/:id'} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <FullComment {...props} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);
