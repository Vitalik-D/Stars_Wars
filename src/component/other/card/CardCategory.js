import React from "react";

function CardCategory(props) {
  return (
    <div className="card">
      <img src={props.src} alt="card" />
      <span className="category_text">{props.name}</span>
    </div>
  );
}

export default CardCategory;
