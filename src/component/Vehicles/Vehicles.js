import React from "react";
import * as dataApi from "../../api/Api";
import ApiPagination from "../pagination/ApiPagination";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";
import {Link} from "react-router-dom";




class Vehicles extends React.Component {
  state = {
    pathName: 'vehicles',
    isLoaded: false,
    page: 0,
    count: 0,
    vehicles: []
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
    const { count, results: vehicles } = await dataApi.getAll({ pathName , page });

    this.setState({
      vehicles,
      count,
      isLoaded: true
    });
  };

  render() {
    const { vehicles, isLoaded, count, page } = this.state;
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
                  {vehicles.map(vehicles => (
                      <div key={vehicles.name} className="starships">
                        <Link to={`/vehicles/${vehicles.url.match(/\d+/)}`}>
                          <img src={`./img/vehicles/${vehicles.url.match(/\d+/)}.jpg`} alt={vehicles.name} />
                        </Link>
                        <p>Name: {vehicles.name}</p>
                        <p>Model: {vehicles.model}</p>
                        <p>Manufacturer: {vehicles.manufacturer}</p>
                        <p>Length: {vehicles.length}</p>
                        <p>Crew: {vehicles.crew}</p>
                        <p>Vehicle class: {vehicles.vehicle_class}</p>
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

export default Vehicles;
