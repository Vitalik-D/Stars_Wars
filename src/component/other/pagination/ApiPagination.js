import React from "react";
import { NavLink } from "react-router-dom";


class ApiPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 10,
      count: this.props.count,
      isLoading: false
    };
  }

  componentDidMount() {
    const { count, perPage } = this.state;
    const pagesCount = Math.ceil(count / perPage);
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i + 1);
    }
    if(pagesCount <=1){
      this.setState({
        pages: [],
        isLoading: true
      });
    }else{ this.setState({
      pages,
      isLoading: true
    })}

  }

  render() {
    const { pages, isLoading} = this.state;
    const { pathname} = this.props.props.location;
    return (
      <div className="apiPagination">
        {
          !isLoading ? (
          <></>
        ) : (
          pages.map(page => (
            <NavLink
              isActive={(location) => {
                if(`?page=${page}` === location.search){
                  return true
                }
              }}
              // activeStyle={{
              //   color: "#fff"
              // }}
              activeClassName="selected"
              key={page}
              to={{
                pathname: pathname,
                search: `page=${page}`
              }}
            >
              {page}
            </NavLink>
          ))
        )
        }
      </div>
    );
  }
}

export default ApiPagination;
