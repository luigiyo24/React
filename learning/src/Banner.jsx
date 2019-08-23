import React from "react";

const Banner = () => (
    <div className="main-banner img-container l-section " id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://codebushi.com/static/1d67ec357efee6ee351cdc72a6cfce48/41425/react-component-optimization.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0"> Read Documentation </p>
            <p> React JS is a library to use for Front End</p>
            <a href="https://www.google.com" className="button">Follow</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner