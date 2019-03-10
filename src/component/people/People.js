import React from "react";

import * as peopleApi from "../../api/peopleApi";
import ApiPagination from "../pagination/ApiPagination";

import Loading from "../loading/Loading";

import q from "../../img/people/q.jpg"


class People extends React.Component {
  state = {
    isLoaded: false,
    page: 1,
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
      this.setState({ page }, this.loadPeople);
    }
  }

  loadPeople = async () => {
    const { page } = this.state;
    const { count, results: people } = await peopleApi.getAll({ page });

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
            <ApiPagination count={count} page={page} />
            <div className="peopleList">
            {people.map(person => (
              <div key={person.name} className="people">
                  <img src={q} alt="{person.name}"/>
                  <p>{person.name}</p>
              </div>
            ))}
            </div>

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
