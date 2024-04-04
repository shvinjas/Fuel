import React from "react";
import "./MapPage.Module.css";
import {Link} from "react-router-dom"
import LocationInfo from "../LocationInfo/LocationInfo";

const MapPage = () => {
  return (
    <div className="searchWrap">
      <p>Currently Showing:</p>
      <div className="searchBar">
        <div className="searchShow">
          <button className="iconCard">
            <img className="service Car" alt="" src="/uilcarsideview.svg" />
            <div className="service-station">Service Station</div>
          </button>
          <button className="iconCard">
            <img className="time" alt="" src="/lucideclock.svg" />
            <div className="open-now">Open now</div>
          </button>
          <button className="iconCard">
            <img className="petrol91" alt="" src="/icon-z91.png" />
            <div className="petrol">Petrol</div>
          </button>
          

          <Link to ="/filter"  style={{ textDecoration: 'none' }}>
          <button className="iconCard">
             <span className="underline"> + more filters</span>
            {/* <div className="moreFilters">+ More filters</div> */}
          </button>
          </Link>


          <input
            type="text"
            className="searchAnotherLocation"
            placeholder="Search another Location"
          ></input>
        </div>
      </div>
      <LocationInfo/>
    </div>
  );
};

export default MapPage;
