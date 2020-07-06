import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <div className="cta-button">
      <button className="btn" onClick={props.openQuoteBox}>Get A Free Quote Now</button>
    </div>
  );
}

export default Button;
