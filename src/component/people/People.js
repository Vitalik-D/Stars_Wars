import React from "react";

import { getPeople } from "../../api/Api";
import Header from "../header/Header";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";

class People extends React.Component {
    componentDidMount() {
        getPeople()
    }

    render() {
        return (
            <>
                <Header category="Character"/>
                <Pagination page="Character"/>
                <Footer/>
            </>
        );
    }
}

export default People;