import React from "react";

function OneFilm(data) {
  data = data.data;
  return (
    <>
      <div className="onePage">
        <div className="onePage_logo">
          <img src={`../img/films/${data.episode_id}.jpg`} alt={data.title} />
        </div>
        <div className="onePage_text">
          <p>
            Name: <span>{data.title}</span>
          </p>
          <p>
            Episode: <span>{data.episode_id}</span>
          </p>
          <p>
            Opening crawl: <span>{data.opening_crawl}</span>
          </p>
          <p>
            Director: <span>{data.director}</span>
          </p>
          <p>
            Producer: <span>{data.producer}</span>
          </p>
          <p>
            Release date: <span>{data.release_date}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneFilm;
