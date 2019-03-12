import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class Loading extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="loading">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Loading;
