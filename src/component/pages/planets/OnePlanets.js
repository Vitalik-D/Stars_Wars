import React from "react";

function OnePlanets(data) {
  const index = data.id;
  data = data.data;
  return (
    <>
      <div className="onePage">
        <div className="onePage_logo">
          <img src={`../img/planets/${index}.jpg`} alt={data.name} />
        </div>
        <div className="onePage_text">
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>
            Diameter: <span>{data.diameter}</span>
          </p>
          <p>
            Climate: <span>{data.climate}</span>
          </p>
          <p>
            Gravity: <span>{data.gravity}</span>
          </p>
          <p>
            Terrain: <span>{data.terrain}</span>
          </p>
          <p>
            Surface water: <span>{data.surface_water}</span>
          </p>
          <p>
            Rotation Period: <span>{data.rotation_period}</span>
          </p>
          <p>
            Orbital Period: <span>{data.orbital_period}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OnePlanets;
