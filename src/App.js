import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CardCategory from "./component/other/card/CardCategory";
import character from "./img/home/character.jpg";
import films from "./img/home/films.jpg";
import planets from "./img/home/planets.jpg";
import species from "./img/home/species.jpg";
import starships from "./img/home/starships.jpg";
import vehicles from "./img/home/vehicles.jpg";
import Header from "./component/other/header/Header";

function App() {
  return (
    <>
      <Header title="A VISUAL GUIDE" />
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
    </>
  );
}

export default App;
