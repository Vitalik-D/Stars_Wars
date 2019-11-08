import React from "react";
import Header from "../../other/header/Header";
import Footer from "../../other/footer/Footer";
import * as dataApi from "../../../api/Api";
import Loading from "../../other/loading/Loading";
import PaginationOnePage from "../../other/pagination/PaginationOnePage";

class OneVehicles extends React.Component {
    state = {
        pathName: "vehicles",
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
                                <img src={`../img/vehicles/${index}.jpg`} alt={data.name} />
                            </div>
                            <div className="onePage_text">
                                <p>
                                    Name: <span>{data.name}</span>
                                </p>
                                <p>
                                    Model: <span>{data.model}</span>
                                </p>
                                <p>
                                    Manufacturer: <span>{data.manufacturer}</span>
                                </p>
                                <p>
                                    Cost in credits: <span>{data.cost_in_credits}</span>
                                </p>
                                <p>
                                    Length: <span>{data.length}</span>
                                </p>
                                <p>
                                    Crew water: <span>{data.crew}</span>
                                </p>
                                <p>
                                    Passengers : <span>{data.passengers}</span>
                                </p>
                                <p>
                                    Cargo Capacity: <span>{data.cargo_capacity}</span>
                                </p>
                                <p>
                                    Consumables: <span>{data.consumables}</span>
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
export default OneVehicles;