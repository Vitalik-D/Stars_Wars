import React from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
    let id = props.id;

    if(!id) {
        return (
            <div className="pagination">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <span>/</span>
                <p>{props.page}</p>
            </div>
        );
    } else{
    return(
        <div className="pagination">
            <Link to="/">
                <p>Home</p>
            </Link>
            <span>/</span>
            <Link to={`/${props.page}`}>
                <p>{props.page}</p>
            </Link>
            <span>/</span>
            <p>{id}</p>
        </div>
        )
    }
}

export default Pagination;
