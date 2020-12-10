import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Man extends Component {
    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
                {item.id} - {item.name} - {item.height} - <Link to={`${url}/${item.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(Man);
