import React from "react";
import "./Footer.Module.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footerWrap">
        <div className="footerRow">
          <div className="footerTitle">
            <div className="privacy">Privacy</div>
            <div className="terms-of-use">Terms of use</div>
            <div className="fuel-safety-data">Fuel Safety Data Sheets</div>
            <div className="investor-relations">Investor relations</div>
          </div>
        <div>
            <img
              className="mediaicon"
              loading="lazy"
              alt=""
              src="/Social-media.png"
            />
          </div>
        </div>
      </div >
      <div className="last">
      <div className="Zenergy"> © Z Energy Limited. All trademarks are used under license.</div>
      </div>
      </div>
    </>
  );
};

export default Footer;
