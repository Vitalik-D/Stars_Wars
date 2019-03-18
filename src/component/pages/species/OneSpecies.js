import React from "react";
import Header from "../../other/header/Header";
import Footer from "../../other/footer/Footer";
import * as dataApi from "../../../api/Api";
import Loading from "../../other/loading/Loading";
import PaginationOnePage from "../../other/pagination/PaginationOnePage";

class OneSpecies extends React.Component {
    state = {
        pathName: "species",
        data: [],
        isLoaded: false
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
        const urlParams = window.location.pathname;
        const index = urlParams.match(/\d+/);
        const { data, isLoaded } = this.state;
        return (
            <>
                {isLoaded ? (
                    <>
                        <Header />
                        <PaginationOnePage name={data.name} />
                        <div className="onePage">
                            <div className="onePage_logo">
                                <img src={`../img/species/${index}.jpg`} alt={data.name} />
                            </div>
                            <div className="onePage_text">
                                <p>
                                    Name: <span>{data.name}</span>
                                </p>
                                <p>
                                    Classification: <span>{data.classification}</span>
                                </p>
                                <p>
                                    Designation: <span>{data.designation}</span>
                                </p>
                                <p>
                                    Average height: <span>{data.average_height}</span>
                                </p>
                                <p>
                                    Language: <span>{data.language}</span>
                                </p>
                            </div>
                        </div>
                        <Footer />
                    </>
                ) : (
                    <>
                        <Loading />
                    </>
                )}
            </>
        );
    }
}

export default OneSpecies;