import React from "react";
import img_avatar from "../../Assets/img_avatar.png";
import Coal from "../../Components/Coal/Coal";
import "./Card.css";

function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{props.name}</h1>
          <img src={img_avatar} alt="Avatar" />
          <p>{props.text}</p>
        </div>
        <div class="flip-card-back">
          <Coal
            name={props.name}
            moisture={props.moisture}
            volatileMatter={props.volatileMatter}
            fixedCarbon={props.fixedCarbon}
            sulfur={props.sulfur}
            ash={props.ash}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
