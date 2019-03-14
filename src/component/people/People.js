import React from "react";

import * as dataApi from "../../api/Api";
import ApiPagination from "../pagination/ApiPagination";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";


import Pagination from "../pagination/Pagination";


class People extends React.Component {
  state = {
    pathName: 'people',
    isLoaded: false,
    page: 0,
    count: 0,
    people: []
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
    const { count, results: people } = await dataApi.getAll({ pathName , page });

    this.setState({
      people,
      count,
      isLoaded: true
    });
  };

  render() {
    const { people, isLoaded, count, page } = this.state;
    return (
      <>
        {isLoaded ? (
          <>
            <Header category="Character"/>
            <div className='nav'>
              <Pagination page="Character"/>
              <ApiPagination count={count} page={page} />
            </div>
            <div className="dataList">
              {people.map(person => (
                <div key={person.name} className="people">
                  <img src={`./img/people/${person.url.match(/\d+/)}.jpg`} alt={person.name} />
                  <p>Name: {person.name}</p>
                  <p>Birth Year: {person.birth_year}</p>
                  <p>Gender: {person.gender}</p>
                  <p>Height: {person.height}</p>
                  <p>Weight: {person.mass}</p>
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

export default People;
