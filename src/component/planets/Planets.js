import * as dataApi from "../../api/Api";
import ApiPagination from "../pagination/ApiPagination";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";


import Pagination from "../pagination/Pagination";
import React from "react";
import {Link} from "react-router-dom";



class Planets extends React.Component {
    state = {
        pathName: 'planets',
        isLoaded: false,
        page: 0,
        count: 0,
        planets: []
    };

    componentDidMount() {
        this.updatePageFromUrl();
    }

    componentDidUpdate() {
        this.updatePageFromUrl();
    }

    updatePageFromUrl() {
        const { location } = this.props;
        const urlParams = new URLSearchParams(location.search);
        const page = +urlParams.get("page") || 1;

        if (page === this.state.page) {
            return;
        } else {
            this.setState({ page }, this.loadData);
        }
    }

    loadData = async () => {
        const {pathName} = this.state;
        const { page } = this.state;
        const { count, results: planets } = await dataApi.getAll({ pathName , page });

        this.setState({
            planets,
            count,
            isLoaded: true
        });
    };

    render() {
        const { planets, isLoaded, count, page } = this.state;
        return (
            <>
                {isLoaded ? (
                    <>
                        <Header category="Planets"/>
                        <div className="nav">
                            <Pagination page="Planets"/>
                            <ApiPagination count={count} page={page} />
                        </div>
                        <div className="dataList">
                            {planets.map(planet => (
                                <div key={planet.name} className="planets">
                                    <Link to={`/planets/${planet.url.match(/\d+/)}`}>
                                        <img src={`./img/planets/${planet.url.match(/\d+/)}.jpg`} alt={planet.name}/>
                                    </Link>
                                    <p>Name: {planet.name}</p>
                                    <p>Diameter: {planet.diameter}</p>
                                    <p>Climate: {planet.climate}</p>
                                    <p>Gravity: {planet.gravity}</p>
                                    <p>Terrain: {planet.terrain}</p>
                                    <p>Surface water: {planet.surface_water}</p>
                                    <p>Population: {planet.population}</p>
                                </div>
                            ))}
                        </div>
                        <Footer/>
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

export default Planets;