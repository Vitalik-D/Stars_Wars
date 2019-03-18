import React from "react";
import { Link } from "react-router-dom";


class PaginationOnePage extends React.Component {

    render() {
        const urlParams = window.location.pathname;
        const VRegExp = new RegExp(/\/\d+/g);
        const index = urlParams.replace(VRegExp, '');
        const pathName = index.replace(/\//g, '');
        return (
            <div className="pagination">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <span>/</span>
                <Link to={index}>
                    <p>{pathName}</p>
                </Link>
                <span>/</span>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default PaginationOnePage;