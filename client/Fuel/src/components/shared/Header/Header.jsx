import React from "react";
import "./Head.Module.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <section className="frame-section">
      <div className="web-top-nav-wrapper">
        <div className="web-top-nav2">

        <Link to ="/">
          <div className="logo-wrapper">
            <img
              className="logo-icon1"
              loading="lazy"
              alt=""
              src="/Z-logo.png"
            />
          </div>
          </Link>
          <div className="company-copyright-wrapper">
            <div className="nav-title">
              <b className="products-and-services1">Products and services</b>
              <div className="vector-wrapper1">
                <img className="vector-icon5" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className="web-top-nav-inner1">
            <div className="nav-title">
              <b className="for-businesses1">For businesses</b>
              <div className="vector-wrapper2">
                <img className="vector-icon6" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className="web-top-nav-inner2">
            <div className="nav-title">
              <b className="sustainability1">Sustainability</b>

              <div className="vector-wrapper3">
                <img className="vector-icon7" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className="web-top-nav-inner3">
            <div className="nav-title">
              <b className="contact-us2">Contact Us</b>

              <div className="vector-wrapper4">
                <img className="vector-icon8" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className="web-top-nav-inner4">
            <div className="nav-title">
              <b className="about-z1">About Z</b>
              <div className="vector-wrapper5">
                <img className="vector-icon9" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>

          <div className="web-top-nav-inner5">
            <div className="nav-title">
              <b className="about-h1">HELP</b>
              <div className="vector-wrapper6">
              <img
                  className="th-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/th-1@2x.png"
                />
              </div>
            </div>
          </div>
          {/* <div className="frame-parent4">
            <div className="nav-title">
              <b className="help1">HELP</b>
              <div>
                <img
                  className="th-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/th-1@2x.png"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
