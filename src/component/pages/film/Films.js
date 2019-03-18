import React from "react";
import Header from "../../other/header/Header";
import Footer from "../../other/footer/Footer";

import * as dataApi from "../../../api/Api";

import Loading from "../../other/loading/Loading";
import Pagination from "../../other/pagination/Pagination";
import { Link } from "react-router-dom";


class Films extends React.Component {
  state = {
    pathName: "films",
    isLoaded: false,
    page: 0,
    films: [],
  };


  componentDidMount() {
    this.updatePageFromUrl();
  }

  updatePageFromUrl() {
    const page = 1;

    this.setState({ page }, this.loadData);
  }

  loadData = async () => {

    const { pathName } = this.state;
    const { page } = this.state;
    const { results: films } = await dataApi.getAll({ pathName, page });

    this.setState({
      films,
      isLoaded: true
    });
  };

  render() {

    const { films, isLoaded } = this.state;
    return (
      <>
        {isLoaded ? (
          <>
            <Header />

              <Pagination page="Films"/>


            <div className="dataList">
              {films.map(film => (
                <div key={film.title} className="films">
                  <Link to={`/films/${film.episode_id}`}>
                  <img src={`./img/films/${film.episode_id}.jpg`} alt={film.title}/>
                  </Link>
                  <p>Name: {film.title}</p>
                  <p>Episode: {film.episode_id}</p>
                  <p>Name: {film.director}</p>
                  <p>Name: {film.release_date}</p>
                </div>
              ))}
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

export default Films;
