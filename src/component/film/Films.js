import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import * as dataApi from "../../api/Api";

import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";

import images from "../../img/films/imgFilms"
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
    console.log(images.map(img =>(
        img[1]
    )));
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

                  <img src={images.map(img =>(
                      img[1]
                  ))} alt={film.title}/>
                  <p>Name: {film.title}</p>
                  <p>Name: {film.episode_id}</p>
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
