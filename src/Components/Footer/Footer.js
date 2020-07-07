import React from "react";
import "./Footer.css";
import fb from "../../Assets/fb_logo.png";
import insta from "../../Assets/insta_logo.png";
import twitter from "../../Assets/twitter_logo.png";
import whatsapp from "../../Assets/whatsapp_logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="follow-us">
        <h1>FOLLOW #SHAHCOALS</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/shahcoals" target="__blank">
            <img src={fb} alt="follow-fb"></img>
          </a>
          <a href="https://www.instagram.com/shahcoals" target="__blank">
            <img src={insta} alt="follow-insta"></img>
          </a>
          <a href="https://www.twitter.com/shahcoals" target="__blank">
            <img src={twitter} alt="follow-twitter"></img>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+923336483355">
            <img src={whatsapp} alt="follow-whatsapp"></img>
          </a>
        </div>
      </div>
      <div class="newsletter">
        <div className="line-style"></div>
        <h1>NEWSLETTER</h1>
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL ADDRESS HERE"
        ></input>
      </div>
    </div>
  );
}

export default Footer;
