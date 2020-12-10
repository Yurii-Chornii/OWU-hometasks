import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class User extends Component {
    render() {
        let {item, showBtn, match: {url}} = this.props;
        return (
            <div>
                {item.id} - {item.name} {showBtn && <Link to={`${url}/${item.id}`}>info button</Link>}
            </div>
        );
    }

}

export default withRouter(User);
