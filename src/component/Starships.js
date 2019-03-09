
import React from "react";

import { getStarships } from "../api/Api";

class Starships extends React.Component {
    componentDidMount() {
        getStarships()
    }

    render() {
        return <div >fghfgh</div>;
    }
}

export default Starships;