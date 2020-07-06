import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "../Card/Card";
import Button from "../CTAButton/Button";
import Movie from "../../Assets/ShahCoals.mp4";
import QuoteBox from "../GetQuoteBox/QuoteBox";
import "./Body.css";

function Body() {
  const [quoteBox, setQuoteBox] = useState(false);

  return (
    <React.Fragment>
      <CSSTransition
        in={quoteBox}
        timeout={200}
        classNames="slide"
        unmountOnExit
      >
        <QuoteBox closeQuoteBox={() => setQuoteBox(false)} />
      </CSSTransition>
      <section className="container">
        <div className="video">
          <video autoPlay loop muted>
            <source src={Movie} type="video/mp4" />
          </video>
        </div>
        <div className="title">
          <h1>ShahCoals</h1>
          <p>
            We Aim To Deliver The <span>HIGHEST QUALITY COAL</span> We Mine.
          </p>
        </div>
        <Button openQuoteBox={() => setQuoteBox(true)} />
      </section>
      <section className="card-conatiner">
        <div className="card">
          <Card
            name="BK 6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="30%"
            volatileMatter="40%"
            fixedCarbon="50%"
            sulfur="60%"
            ash="70%"
          />
          <Card
            name="BK 4 (4-Footy)"
            text="This is some basic info of Coal 4-Footy"
            moisture="70%"
            volatileMatter="60%"
            fixedCarbon="50%"
            sulfur="40%"
            ash="30%"
          />
          <Card
            name="BK 6 (2-Footy)"
            text="This is some basic info of Coal 2-Footy"
            moisture="20%"
            volatileMatter="40%"
            fixedCarbon="60%"
            sulfur="40%"
            ash="20%"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Body;
