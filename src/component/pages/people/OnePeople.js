import React from "react";

function OnePeople(data) {
    const index = data.id;
    data = data.data;
    return (
    <>
      <div className="onePage">
        <div className="onePage_logo">
          <img src={`../img/people/${index}.jpg`} alt={data.name} />
        </div>
        <div className="onePage_text">
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>
            Height: <span>{data.height}</span>
          </p>
          <p>
            Mass: <span>{data.mass}</span>
          </p>
          <p>
            Birth Year: <span>{data.birth_year}</span>
          </p>
          <p>
            Gender: <span>{data.gender}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OnePeople;
