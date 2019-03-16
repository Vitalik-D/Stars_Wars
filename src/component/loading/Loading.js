import React from "react";
import Header from "../header/Header";

import sword from "../../img/Lazer Sword.png"

class Loading extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="loading">
            <img src={sword} className="logo-load-spin" alt="Lazer-Sword"/>
        </div>

      </>
    );
  }
}

export default Loading;
