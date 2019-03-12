import React from "react";
import * as dataApi from "../../api/Api";
import ApiPagination from "../pagination/ApiPagination";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";




class Species extends React.Component {
    state = {
        pathName: 'species',
        isLoaded: false,
        page: 0,
        count: 0,
        species: []
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
        const { count, results: species } = await dataApi.getAll({ pathName , page });

        this.setState({
            species,
            count,
            isLoaded: true
        });
    };

    render() {
        const { species, isLoaded, count, page } = this.state;
        return (
            <>
                {isLoaded ? (
                    <>
                        <Header category="Species"/>
                        <div className='nav'>
                            <Pagination page="Species"/>
                            <ApiPagination count={count} page={page} />
                        </div>
                        <div className="dataList">
                            {species.map(specie => (
                                <div key={specie.name} className="species">
                                    <img src="" alt={specie.name}/>
                                    <p>Name: {specie.name}</p>
                                    <p>Classification: {specie.classification}</p>
                                    <p>Average height: {specie.average_height}</p>
                                    <p>Average lifespan: {specie.average_lifespan}</p>
                                    <p>Language: {specie.language}</p>
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

export default Species;