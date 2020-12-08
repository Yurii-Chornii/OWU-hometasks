import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../Post/Post";
import {Switch, Route} from "react-router-dom";


class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(value => <Post key={value.id} item={value}/>)}
                <br/>
                <div>
                    <Switch>
                        <Route path={`/posts/:id`} render={() => {

                            return 'posts'
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllPosts;
