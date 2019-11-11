import React from "react";

function OneStarships(data) {
  const index = data.id;
  data = data.data;
  return (
    <>
      <div className="onePage">
        <div className="onePage_logo">
          <img src={`../img/starships/${index}.jpg`} alt={data.name} />
        </div>
        <div className="onePage_text">
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>
            Model: <span>{data.model}</span>
          </p>
          <p>
            Manufacturer: <span>{data.manufacturer}</span>
          </p>
          <p>
            Cost in credits: <span>{data.cost_in_credits}</span>
          </p>
          <p>
            Length: <span>{data.length}</span>
          </p>
          <p>
            Crew water: <span>{data.crew}</span>
          </p>
          <p>
            Passengers : <span>{data.passengers}</span>
          </p>
          <p>
            Cargo Capacity: <span>{data.cargo_capacity}</span>
          </p>
          <p>
            Consumables: <span>{data.consumables}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneStarships;
