import React, {Component} from 'react';
import SearchService from "../services/SearchService";
import Comment from "./Comment";

class CommentsSearch extends Component {
    state = {comments : []}
    searchService = new SearchService();
    componentDidMount() {
        const {number, match: {path}} = this.props;
        this.searchService.getElement(path, number).then(comments => this.setState({comments}))
    }
    render() {
        const {comments} = this.state;
        const {number} = this.props;
        return (
            <div className={'searchArea'}>
                <h3>Comment</h3>
                {number && <Comment number={number} elements={comments}/>}
            </div>
        );
    }
}

export default CommentsSearch;
