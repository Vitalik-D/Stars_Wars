import React from "react";
import { Link } from "react-router-dom";

function Vehicles({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(vehicles => (
          <div key={vehicles.name} className="starships">
            <Link to={`/vehicles/${vehicles.url.match(/\d+/)}`}>
              <img
                src={`./img/vehicles/${vehicles.url.match(/\d+/)}.jpg`}
                alt={vehicles.name}
              />
            </Link>
            <p>Name: {vehicles.name}</p>
            <p>Model: {vehicles.model}</p>
            <p>Manufacturer: {vehicles.manufacturer}</p>
            <p>Length: {vehicles.length}</p>
            <p>Crew: {vehicles.crew}</p>
            <p>Vehicle class: {vehicles.vehicle_class}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Vehicles;
