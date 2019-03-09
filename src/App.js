import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


import Header from "./component/header/Header";
import Card from "./component/card/Card";
import Footer from "./component/footer/Footer";

import character from './img/character.jpg'
import films from './img/films.jpg'
import planets from './img/planets.jpg'
import species from './img/species.jpg'
import starships from './img/starships.jpg'
import vehicles from './img/vehicles.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <Header category="A VISUAL GUIDE"/>
        <div>
          <div className="app">
            <Link to="/people">
              <Card name="Character" src={character} />
            </Link>
            <Link to="/films">
              <Card name="Film" src={films} />
            </Link>
            <Link to="/species">
              <Card name="Species" src={species} />
            </Link>
            <Link to="/starships">
              <Card name="Starships" src={starships} />
            </Link>
            <Link to="/vehicles">
              <Card name="Vehicles" src={vehicles} />
            </Link>
            <Link to="/planets">
              <Card name="Planets" src={planets} />
            </Link>

            <div className="container-fluid">

            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
