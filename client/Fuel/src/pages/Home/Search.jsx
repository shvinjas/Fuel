import React from "react";
import "./Search.Module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocationInfo from "../LocationInfo/LocationInfo";

const Search = () => {
  const [stations, setStations] = useState([]);
  const [cityName, setCityName] = useState("Wellington");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCityName(event.target.value); // Update the city name state when input changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch data from local JSON file
      const response = await fetch(`/public/station/stations.json`);
      const data = await response.json();
      const cityStations = data.stations.filter(station => station.city.toLowerCase() === cityName.toLowerCase());
      console.log(cityStations);
      setStations(cityStations);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch all stations when the component mounts
    const fetchStations = async () => {
      try {
        const response = await fetch("/public/station/stations.json");
        const data = await response.json();
        setStations(data.stations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchStations();
  }, []);
  

  return (
    <>
      <div className="z-banner">
        <img className="imageHero" alt="" src="/Background-home.png"></img>
      </div>
      <div className="bannerWrapper">
        <div className="FrameWrapper">
          <p className="kia-ora">
            Kia Ora! How can we fuel your journey today?
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="searchLocation"
            value={cityName}
            onChange={handleInputChange}
            placeholder="Search Location"
          ></input>
<Link to="/Map" style={{ textDecoration: 'none' }}>
          <div>
            <button type="submit" className="gobu">
              <b className="go">GO</b>
              <img className="learn-more-button" alt="" src="/arrow-navy.png" />
            </button>
          </div>
          </Link>
        </form>

        <div>
          <button className="useMyLocation">
            <img className="learn-more-web" alt="" src="/location-icon.png" />
            <i className="location">Use my location</i>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Search;

{
  /* <div className="search-page">
<section className="z-background-gradient-parent">
  <div className="z-background-gradient">
    <div className="z-background-gradient-child" />
  </div>
  <img className="image-36-icon" alt="" src="/image-36@2x.png" />
</section>
<LogoInstance />
<section className="web-bottom-nav">
  <PrivacyTerms />
  <WebBottomNav />
</section>
</div> */
}
