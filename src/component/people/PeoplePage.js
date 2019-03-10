import React from "react";


import Header from "../header/Header";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";
import People from "./People";

class PeoplePage extends React.Component {
    render() {
        return (
            <div className="people">
                <Header category="Character"/>
                <People/>
                <Pagination page="Character"/>
                <Footer/>
            </div>

        );
    }
}

export default PeoplePage;