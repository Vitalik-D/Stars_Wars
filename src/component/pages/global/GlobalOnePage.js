import React from "react";
import * as dataApi from "../../../api/Api";
import Loading from "../../other/loading/Loading";
import Pagination from "../../other/pagination/Pagination";
import PageNotFound from "../pageNotFound/PageNotFound";
import Header from "../../other/header/Header";
import OneFilm from "../film/OneFilm";
import OneStarships from "../starship/OneStarships";
import OnePeople from "../people/OnePeople";
import OnePlanets from "../planets/OnePlanets";
import OneVehicles from "../Vehicles/OneVehicles";
import OneSpecies from "../species/OneSpecies";

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: "films",
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const pathName = this.props.location.pathname;
    const data = await dataApi.getById({ pathName });
    let nameBlock = pathName.replace(/\W|\d/g, "");
    const id = pathName.replace(/\D/g, "");
    this.setState({
      data,
      isLoaded: true,
      pathName: nameBlock,
      pagination: id
    });
  };

  render() {
    const { data, isLoaded, pathName, pagination } = this.state;
    return (
      <>
        {isLoaded ? (
          <>
            <Header title={pathName} />
            <Pagination page={pathName} id={pagination} />
            <Block
              data={data}
              pathName={pathName}
              id={pagination}
              props={this.props}
            />
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

const Block = ({ data, pathName, id }) => {
  switch (pathName) {
    case "starships":
      return <OneStarships data={data} id={id} />;
    case "people":
      return <OnePeople data={data} id={id} />;
    case "films":
      return <OneFilm data={data} id={id} />;
    case "planets":
      return <OnePlanets data={data} id={id} />;
    case "vehicles":
      return <OneVehicles data={data} id={id} />;
    case "species":
      return <OneSpecies data={data} id={id} />;
    default:
      return <PageNotFound />;
  }
};

export default PageOne;
