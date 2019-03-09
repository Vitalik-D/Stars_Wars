import React from "react";
import { Link } from "react-router-dom";


class Pagination extends React.Component {

    render() {
        return (
            <div className="pagination">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <span>/</span>
                <p>{this.props.page}</p>
            </div>
        );
    }
}

export default Pagination;