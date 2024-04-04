import React from "react";
import "./AddressCard.Module.css";
import { Link } from "react-router-dom";

const AddressCard = () => {
  return (
    <div className="addressWrap">
      <div className="addressTop">
        <Link to="/">
          <img className="zlogo" loading="lazy" alt="" src="/image-15@2x.png" />
        </Link>
        <img
          className="closeicon"
          loading="lazy"
          alt=""
          src="/close-icon.png"
        />
      </div>

      <div className="address1">
        <p className="line1">Z Hutt Rd</p>
        <p className="line2">453 Hutt Rd, Lower Hutt</p>
        <p className="line2">24/7 pay at pump</p>
      </div>

      <div className="mobileIcon">
        <button className="button">
          <img
            style={{ width: "35px" }}
            className="icon"
            alt=""
            src="/maptoilet.svg"
          />
          <div className="title">Bathrooms</div>
        </button>
        <button className="button">
          <img
            style={{ marginTBottom: "20px" }}
            className="icon"
            alt=""
            src="/carwashnavy@2x.png"
          />
          <div className="title">Car Wash</div>
        </button>
        <button className="button">
          <img
            style={{ width: "35px" }}
            className="icon"
            alt=""
            src="/icon-food-coffee.png"
          />
          <div className="title">Food & Coffee</div>
        </button>
        <button className="button">
          <img className="icon" alt="" src="/iconoirhandcontactless.svg" />
          <div className="title">Pay at pump</div>
        </button>
        <button className="button">
          <img className="icon" alt="" src="/icoutlinepropanetank1.svg" />
          <div className="title">LPG Swap</div>
        </button>
      </div>

      <button className="googleButton">
        <b className="googleMaps">Open in Google Maps</b>
      </button>
    </div>
  );
};

export default AddressCard;
