import React from "react";
import "./Filter.Module.css";
import {Link} from "react-router-dom"

const Filter = () => {
  return (
    <div>
      <div className="filterContainer">
        <Link to="/">
        <div className="topFilter">
          <img className="Zlogo" loading="lazy" alt="" src="/Z-logo.png" />
          <img
            className="close-icon"
            loading="lazy"
            alt=""
            src="/close-icon.svg"
          />
        </div>
        </Link>
        <div className="moreFilters">More filters</div>
        <div className="StationType"> Station type</div>

        <div className="stations">
          <div className="plots">
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-car-sideview.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-clock.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-truck.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
          </div>
        </div>
        <div className="StationType">Fuel type</div>

        <div className="stations">
          <div className="plots">
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-z91.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-z95.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-diesel.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-ev.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
          </div>
        </div>
        <div>Other services</div>

        <div className="stations">
          <div className="plots">
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-food-coffee.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-bathroom.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-carwash.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-payatpump.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
          </div>
        </div>

        <div className="stations">
          <div className="plots">
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-tyre.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-trailer.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-lpg.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
            <button className="Tiles">
              <img
                className="icons"
                loading="lazy"
                alt=""
                src="/icon-hose.png"
              ></img>
              <p className="facility">ServiceStation</p>
            </button>
          </div>
        </div>

        <button className="BlueButton">
          <div className="apply">
            <p className="applyButton">Apply</p>
            <img
              className="iconwhite"
              loading="lazy"
              alt=""
              src="/arrow-white.png"
            ></img>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
