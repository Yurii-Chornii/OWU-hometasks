import React, {Component} from 'react';
import SearchService from "../services/SearchService";
import Post from "./Post";

class PostsSearch extends Component {
    state = {posts : []}
    searchService = new SearchService();
    componentDidMount() {
        const {number, match: {path}} = this.props;
        this.searchService.getElement(path, number).then(posts => this.setState({posts}))
    }

    render() {
        const {posts} = this.state;
        const {number} = this.props;
        return (
            <div className={'searchArea'}>
                <h3>Post</h3>
                {number && <Post number={number} elements={posts}/>}
            </div>
        );
    }
}

export default PostsSearch;
