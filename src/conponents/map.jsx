import React from "react";
import Maps from "../assets/maps.png";



const Map = () => {
  return (
    <div className="map">
      <div className="map-title">
        <h3>Our Regional Presence</h3>
        <p>
          Loren Ipsum is simply dummy text of the printing and typesetting
          industry. Loren Ipsum has <br />
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer
        </p>
      </div>
      <div className="map-outline">
        <img src={Maps} alt="" className="africa" />
      </div>
    </div>
  );
};

export default Map;
