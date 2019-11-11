import React from "react";
import * as dataApi from "../../../api/Api";
import Loading from "../../other/loading/Loading";
import Pagination from "../../other/pagination/Pagination";
import ApiPagination from "../../other/pagination/ApiPagination";
import Starship from "../starship/Starships";
import People from "../people/People";
import Films from "../film/Films";
import Planets from "../planets/Planets";
import Vehicles from "../Vehicles/Vehicles";
import Species from "../species/Species";
import PageNotFound from "../pageNotFound/PageNotFound";
import Header from "../../other/header/Header";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: "",
      isLoaded: false,
      page: 0,
      count: 0,
      data: [],
      Pagination: false,
      BreadCrumbs: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.search !== this.props.location.search) {
      this.loadData();
    }
  }

  loadData = async () => {
    const { location } = this.props;
    const urlParams = new URLSearchParams(location.search);
    const page = +urlParams.get("page") || 1;

    const pathName = this.props.location.pathname;
    const { count, results: data, next } = await dataApi.getAll({
      pathName,
      page
    });

    this.setState({
      page,
      data,
      next,
      count,
      isLoaded: true,
      pathName
    });
  };

  render() {
    const { data, isLoaded, pathName, count } = this.state;
    const nameBlock = pathName.replace("/", "");

    return (
      <>
        {isLoaded ? (
          <>
            <Header title={nameBlock} />
            <div className="nav">
              <Pagination page={nameBlock} />
              <ApiPagination count={count} props={this.props} />
            </div>

            <Block data={data} pathName={nameBlock} props={this.props} />
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

const Block = ({ data, pathName }) => {
  switch (pathName) {
    case "starships":
      return <Starship data={data} />;
    case "people":
      return <People data={data} />;
    case "films":
      return <Films data={data} />;
    case "planets":
      return <Planets data={data} />;
    case "vehicles":
      return <Vehicles data={data} />;
    case "species":
      return <Species data={data} />;
    default:
      return <PageNotFound />;
  }
};

export default Page;
