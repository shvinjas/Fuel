import React from "react";
import "./CardImage.Module.css";

const Cardimage = () => {
  return (
    <div className="cardImageWrap">
      <div className="cardDisplay">
        <div className="powerWrap">
          <b className="power">Power your home</b>
          <p className="details">
            Specialised home power plans to help keep your home and vehicle
            running, whether you are EV or non-EV drivers.
          </p>
          <button className="learn">
            <b className="more">Learn more</b>
            <img
              className="redArrow"
              loading="lazy"
              alt=""
              src="/arrow-orange.png"
            ></img>
          </button>
        </div>
        <div className="houseImage">
          <img className="house" loading="lazy" alt="" src="/image1.png" />
        </div>
      </div>
      <div className="cardDisplay">
        <div className="powerWrap">
          <b className="Zapp">Z App</b>
          <b className="power">Sharetank</b>
          <p className="details">
            Sign up to Sharetank with Z app today! You can fill up anytime and
            share with up to 5 friends or whanau.
          </p>
          <button className="learn">
            <b className="more">Learn more</b>
            <img
              className="redArrow"
              loading="lazy"
              alt=""
              src="/arrow-orange.png"
            ></img>
          </button>
        </div>
        <div className="carImage">
          <img
            style={{ marginLeft: "-10px" }}
            className="house"
            loading="lazy"
            alt=""
            src="/image2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Cardimage;
