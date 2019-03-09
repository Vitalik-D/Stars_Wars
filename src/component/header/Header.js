import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <p>Star Wars</p>
        </div>
          <div>
              <p>{this.props.category}</p>
          </div>
      </div>
    );
  }
}

export default Header;
