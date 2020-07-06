import React from "react";

import "./Coal.css";

function Coal(props) {
  return (
    <div className="chart">
      <h1>{props.name}</h1>
      <li>
        <h5>Moisture - {props.moisture}</h5>
        <span className="bar">
          <span style={{ width: props.moisture }}></span>
        </span>
      </li>
      <li>
        <h5>Volatile Matter - {props.volatileMatter}</h5>
        <span className="bar">
          <span style={{ width: props.volatileMatter }}></span>
        </span>
      </li>
      <li>
        <h5>Fixed Carbon - {props.fixedCarbon}</h5>
        <span className="bar">
          <span style={{ width: props.fixedCarbon }}></span>
        </span>
      </li>
      <li>
        <h5>Sulfur - {props.sulfur}</h5>
        <span className="bar">
          <span style={{ width: props.sulfur }}></span>
        </span>
      </li>
      <li>
        <h5>Ash - {props.ash}</h5>
        <span className="bar">
          <span style={{ width: props.ash }}></span>
        </span>
      </li>
    </div>
  );
}

export default Coal;
