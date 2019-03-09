import React from "react";

import { getPlanets } from "../api/Api";

class Planets extends React.Component {
    componentDidMount() {
        getPlanets()
    }

    render() {
        return <div >fghfgh</div>;
    }
}

export default Planets;