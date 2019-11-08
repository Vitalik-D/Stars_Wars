import React from "react";
import Header from "../../other/header/Header";
import Footer from "../../other/footer/Footer";
import * as dataApi from "../../../api/Api";
import Loading from "../../other/loading/Loading";
import PaginationOnePage from "../../other/pagination/PaginationOnePage";
import AddFilms from "../additional_components/films";

class OneFilms extends React.Component {
  state = {
    pathName: "films",
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
            <PaginationOnePage  name={data.title} />
            <div className="onePage">
              <div className="onePage_logo">
                <img src={`../img/films/${index}.jpg`} alt={data.title} />
              </div>
              <div className="onePage_text">
                <p>
                  Name: <span>{data.title}</span>
                </p>
                <p>
                  Episode: <span>{data.episode_id}</span>
                </p>
                <p>
                  Opening crawl: <span>{data.opening_crawl}</span>
                </p>
                <p>
                  Director: <span>{data.director}</span>
                </p>
                <p>
                  Producer: <span>{data.producer}</span>
                </p>
                <p>
                  Release date: <span>{data.release_date}</span>
                </p>
              </div>

            </div>
            <AddFilms/>
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

export default OneFilms;
