
import React from "react";

import { getSpecies } from "../api/Api";

class Species extends React.Component {
    componentDidMount() {
        getSpecies()
    }

    render() {
        return <div >fghfgh</div>;
    }
}

export default Species;