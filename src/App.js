import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Header from "./component/header/Header";
import CardCategory from "./component/card/CardCategory";
import Footer from "./component/footer/Footer";

import character from './img/home/character.jpg'
import films from './img/home/films.jpg'
import planets from './img/home/planets.jpg'
import species from './img/home/species.jpg'
import starships from './img/home/starships.jpg'
import vehicles from './img/home/vehicles.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <Header category="A VISUAL GUIDE"/>
        <div>
          <div className="app">
            <Link to="/people">
              <CardCategory name="Character" src={character} />
            </Link>
            <Link to="/films">
              <CardCategory name="Films" src={films} />
            </Link>
            <Link to="/species">
              <CardCategory name="Species" src={species} />
            </Link>
            <Link to="/starships">
              <CardCategory name="Starships" src={starships} />
            </Link>
            <Link to="/vehicles">
              <CardCategory name="Vehicles" src={vehicles} />
            </Link>
            <Link to="/planets">
              <CardCategory name="Planets" src={planets} />
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
