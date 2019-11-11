import React from "react";
import { Link } from "react-router-dom";

function Films({ data }) {
  return (
    <>
      <div className="dataList">
        {data.map(film => (
          <div key={film.title} className="films">
            <Link to={`/films/${film.episode_id}`}>
              <img
                src={`./img/films/${film.episode_id}.jpg`}
                alt={film.title}
              />
            </Link>
            <p>Name: {film.title}</p>
            <p>Episode: {film.episode_id}</p>
            <p>Name: {film.director}</p>
            <p>Name: {film.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Films;
