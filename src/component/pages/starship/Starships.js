import React from "react";
import { Link } from "react-router-dom";

function Starship({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(starship => (
          <div key={starship.name} className="starships">
            <Link to={`/starships/${starship.url.match(/\d+/)}`}>
              <img
                src={`./img/starships/${starship.url.match(/\d+/)}.jpg`}
                alt={starship.name}
              />
            </Link>
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Length: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Starship;
