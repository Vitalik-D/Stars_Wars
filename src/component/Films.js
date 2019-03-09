import React from "react";

import { getFilms } from "../api/Api";

class Films extends React.Component {
    componentDidMount() {
        getFilms()
    }

    render() {
        return <div >fghfgh</div>;
    }
}

export default Films;
