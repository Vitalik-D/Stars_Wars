import React from "react";
import * as dataApi from "../../../api/Api";
import ApiPagination from "../../other/pagination/ApiPagination";
import Loading from "../../other/loading/Loading";
import Header from "../../other/header/Header";
import Footer from "../../other/footer/Footer";
import Pagination from "../../other/pagination/Pagination";
import {Link} from "react-router-dom";




class Starship extends React.Component {
    state = {
        pathName: 'starships',
        isLoaded: false,
        page: 0,
        count: 0,
        starships: []
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
        const { count, results: starships } = await dataApi.getAll({ pathName , page });

        this.setState({
            starships,
            count,
            isLoaded: true
        });
    };

    render() {
        const { starships, isLoaded, count, page } = this.state;
        return (
            <>
                {isLoaded ? (
                    <>
                        <Header category="Starships "/>
                        <div className='nav'>
                            <Pagination page="Starships "/>
                            <ApiPagination count={count} page={page} />
                        </div>
                        <div className="dataList">
                            {starships.map(starship => (
                                <div key={starship.name} className="starships">
                                    <Link to={`/starships/${starship.url.match(/\d+/)}`}>
                                        <img src={`./img/starships/${starship.url.match(/\d+/)}.jpg`} alt={starship.name} />
                                    </Link>
                                    <p>Name: {starship.name}</p>
                                    <p>Model: {starship.model}</p>
                                    <p>Manufacturer: {starship.manufacturer}</p>
                                    <p>Length: {starship.length}</p>
                                    <p>Crew: {starship.crew}</p>
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

export default Starship ;
