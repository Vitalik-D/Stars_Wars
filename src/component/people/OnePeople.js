import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import * as dataApi from "../../api/Api";
import Loading from "../loading/Loading";
import PaginationOnePage from "../pagination/PaginationOnePage";

class OnePeople extends React.Component {
    state = {
        data: [],
        isLoaded: false
    };

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople = async () => {
        const data = await dataApi.getById();
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
                        <PaginationOnePage page="Films" name={data.title} />
                        <div className="onePage">
                            <div className="onePage_logo">
                                <img src={`../img/films/${index}.jpg`} alt="{data.title}" />
                            </div>
                            <div className="onePage_text">
                                <p>
                                    Name: <span>{data.title}</span>
                                </p>
                                <p>
                                    Episode: <span>{data.episode_id}</span>
                                </p>
                                <p>
                                    Opening crawl: <span>{data.opening_crawl}</span>
                                </p>
                                <p>
                                    Director: <span>{data.director}</span>
                                </p>
                                <p>
                                    Producer: <span>{data.producer}</span>
                                </p>
                                <p>
                                    Release date: <span>{data.release_date}</span>
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