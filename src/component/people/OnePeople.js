import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import * as dataApi from "../../api/Api";
import Loading from "../loading/Loading";
import PaginationOnePage from "../pagination/PaginationOnePage";

class OnePeople extends React.Component {
    state = {
        pathName: "people",
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
                        <PaginationOnePage  name={data.name} />
                        <div className="onePage">
                            <div className="onePage_logo">
                                <img src={`../img/people/${index}.jpg`} alt={data.name} />
                            </div>
                            <div className="onePage_text">
                                <p>
                                    Name: <span>{data.name}</span>
                                </p>
                                <p>
                                    Height: <span>{data.height}</span>
                                </p>
                                <p>
                                    Mass: <span>{data.mass}</span>
                                </p>
                                <p>
                                    Birth Year: <span>{data.birth_year}</span>
                                </p>
                                <p>
                                    Gende: <span>{data.gende}</span>
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

export default OnePeople;