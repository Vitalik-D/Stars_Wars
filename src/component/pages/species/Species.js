import React from "react";
import { Link } from "react-router-dom";

function Species({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(specie => (
          <div key={specie.name} className="species">
            <Link to={`/species/${specie.url.match(/\d+/)}`}>
              <img
                src={`./img/species/${specie.url.match(/\d+/)}.jpg`}
                alt={specie.name}
              />
            </Link>
            <p>Name: {specie.name}</p>
            <p>Classification: {specie.classification}</p>
            <p>Average height: {specie.average_height}</p>
            <p>Average lifespan: {specie.average_lifespan}</p>
            <p>Language: {specie.language}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Species;
