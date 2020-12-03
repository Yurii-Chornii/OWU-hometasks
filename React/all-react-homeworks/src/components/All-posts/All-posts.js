import React, {Component} from 'react';
import Post from "../Post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            })
    }
    choseThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <h2>All posts page</h2>
                {
                    posts.map(value => <Post item={value} key={value.id} choseThisPost={this.choseThisPost} showBody={false}/>)
                }
                <hr/>
                {
                    chosenPost && <Post item={chosenPost} showBody={true}/>
                }
            </div>
        );
    }
}

export default AllPosts;
