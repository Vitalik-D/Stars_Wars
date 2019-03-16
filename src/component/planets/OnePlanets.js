import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import * as dataApi from "../../api/Api";
import Loading from "../loading/Loading";
import PaginationOnePage from "../pagination/PaginationOnePage";

class OnePlanets extends React.Component {
  state = {
    pathName: "planets",
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
                <img src={`../img/planets/${index}.jpg`} alt={data.name} />
              </div>
              <div className="onePage_text">
                <p>
                  Name: <span>{data.name}</span>
                </p>
                <p>
                  Diameter: <span>{data.diameter}</span>
                </p>
                <p>
                  Climate: <span>{data.climate}</span>
                </p>
                <p>
                  Gravity: <span>{data.gravity}</span>
                </p>
                <p>
                  Terrain: <span>{data.terrain}</span>
                </p>
                <p>
                  Surface water: <span>{data.surface_water}</span>
                </p>
                <p>
                  Rotation Period: <span>{data.rotation_period}</span>
                </p>
                <p>
                  Orbital Period: <span>{data.orbital_period}</span>
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

export default OnePlanets;
