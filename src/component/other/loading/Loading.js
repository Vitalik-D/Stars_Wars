import React from "react";
import sword from "../../../img/Lazer Sword.png";
import Header from "../header/Header";

export default function Loading() {
  return (
    <>
      <Header />
      <div className="loading">
        <img src={sword} className="logo-load-spin" alt="Lazer-Sword" />
      </div>
    </>
  );
}
