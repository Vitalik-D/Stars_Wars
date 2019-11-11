import React from "react";
import { Link } from "react-router-dom";

function People({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(person => (
          <div key={person.name} className="people">
            <Link to={`/people/${person.url.match(/\d+/)}`}>
              <img
                src={`./img/people/${person.url.match(/\d+/)}.jpg`}
                alt={person.name}
              />
            </Link>
            <p>Name: {person.name}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Weight: {person.mass}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default People;
