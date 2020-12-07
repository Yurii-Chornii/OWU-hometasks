import React, {Component} from 'react';
import {PostsService} from "../../services/PostsService";
import Post from "../post/Post";

class AllPosts extends Component {
    state = {posts : [], chosenPost : null}

    postsService = new PostsService();

    choosePost = (id) => {
        this.postsService.getPostByUd(id).then(value => this.setState({chosenPost : value}))
    }

    componentDidMount() {
        this.postsService.getAllPosts().then(value => this.setState({posts : value}))
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                {posts.map(value => <Post key={value.id} showBtn={true} item={value} choosePost={this.choosePost}/>)}
                <hr/>
                {chosenPost && <Post item={chosenPost}/>}
            </div>
        );
    }
}

export default AllPosts;
