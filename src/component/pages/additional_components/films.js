import React from "react";

import * as dataApi from "../../../api/Api";


class AddFilms extends React.Component {
    state = {
        pathName: "films",
        data: [],
    };

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople = async () => {
        const { pathName } = this.state;
        const data = await dataApi.getById({ pathName });
        this.setState({
            data,
            isLoaded: true
        });
    };

    render() {
        // const urlParams = window.location.pathname;
        // const index = urlParams.match(/\d+/);
        const { data } = this.state;
        console.log(data)
        return (
            <>
                ${console.log(data)}
            </>
        );
    }
}

export default AddFilms;
