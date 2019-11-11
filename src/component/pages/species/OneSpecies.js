import React from "react";

function OneSpecies(data) {
  const index = data.id;
  data = data.data;
  return (
    <>
      <div className="onePage">
        <div className="onePage_logo">
          <img src={`../img/species/${index}.jpg`} alt={data.name} />
        </div>
        <div className="onePage_text">
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>
            Classification: <span>{data.classification}</span>
          </p>
          <p>
            Designation: <span>{data.designation}</span>
          </p>
          <p>
            Average height: <span>{data.average_height}</span>
          </p>
          <p>
            Language: <span>{data.language}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneSpecies;
