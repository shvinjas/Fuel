import { useCallback } from "react";
import StationType from "./StationType";
import FuelType from "./FuelType";
import OtherServices from "./OtherServices";
import "./ModalSearchFilters.css";

const ModalSearchFilters = () => {
  const onBlueButtonContainerClick = useCallback(() => {
    // Please sync "Selected store Glen Park" to the project
  }, []);

  return (
    <div className="modal-search-filters">
      <section className="frame-container">
        <div className="frame-parent1">
          <div className="image-1-wrapper">
            <img
              className="image-1-icon"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <img
            className="close-icon"
            loading="lazy"
            alt=""
            src="/close-icon.svg"
          />
        </div>
        <div className="station-type-card">
          <h2 className="more-filters">More filters</h2>
        </div>
      </section>
      <div className="station-type-wrapper">
        <div className="station-type">Station type</div>
      </div>
      <div className="station-type-container">
        <StationType />
      </div>
      <div className="fuel-type-wrapper">
        <div className="fuel-type">Fuel type</div>
      </div>
      <div className="fuel-type-container">
        <FuelType />
      </div>
      <div className="other-services-wrapper">
        <div className="other-services">Other services</div>
      </div>
      <section className="hose-icon">
        <OtherServices />
      </section>
      <div className="blue-button-wrapper">
        <div className="blue-button" onClick={onBlueButtonContainerClick}>
          <b className="button">Apply</b>
          <img className="vector-icon4" alt="" src="/vector1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ModalSearchFilters;
