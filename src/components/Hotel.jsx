import React from "react";
import logo from "../icons/pin.svg";
import hotel from "../icons/hotel-sign.svg";
import { setPrice, getDateFrom, getDateTo } from "../functions/functions";
import "../styles/results.css";

const Hotels = (props) => {
  const valueDateFrom = getDateFrom(props);
  const valueDateTo = getDateTo(props);
  const valuePrice = setPrice(props);

  return (
    <div className="container-card">
      <div className="card-sub-container">
        <div className="image-container">
          <img src={props.photo} alt={props.name} />
        </div>
        <h1 className="card-tittle">{props.name}</h1>
        <p className="card-date">{valueDateFrom}</p>
        <p className="card-date">{valueDateTo}</p>
        <p className="card-description">{props.description}</p>
        <div className="card-location-container">
          <div className="card-location-icon">
            <img src={logo} alt="location icon" />
          </div>
          <p className="card-location">
            {props.country}, {props.city}
          </p>
        </div>
        <div className="card-room-prizes-container">
          <div className="card-rooms-container">
            <div className="card-rooms-icon">
              <img src={hotel} alt="rooms icon" />
            </div>
            <div className="card-rooms">{props.rooms} habitaciones</div>
          </div>
          <div className="card-prizes">{valuePrice}</div>
        </div>
        <button className="card-button">RESERVAR</button>
      </div>
    </div>
  );
};

export default Hotels;