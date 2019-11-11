import React from "react";
import { Link } from "react-router-dom";

function Planets({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(planet => (
          <div key={planet.name} className="planets">
            <Link to={`/planets/${planet.url.match(/\d+/)}`}>
              <img
                src={`./img/planets/${planet.url.match(/\d+/)}.jpg`}
                alt={planet.name}
              />
            </Link>
            <p>Name: {planet.name}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Planets;
