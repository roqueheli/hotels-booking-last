import React from "react";
import "../styles/header.css";
import { putDates, putCountries } from "../functions/functions";
import { putPrices, putSizes } from "../functions/functions";

const Header = ({ filtersValue }) => {
  const valueDates = putDates(filtersValue);
  const valueCountry = putCountries(filtersValue);
  const valuePrice = putPrices(filtersValue);
  const valueSizes = putSizes(filtersValue);

  return (
    <div className="header_container">
      <div className="header">
        <div className="tittle_container">
          <h1>Hoteles</h1>
        </div>
        <div className="placeholder_container">
          <p
            className={
              valueDates === "El rango de fechas ingresado no es correcto"
                ? "alert"
                : "no-alert"
            }
          >
            {valueDates}
          </p>
          <p>{valueCountry}</p>
          <p>{valuePrice}</p>
          <p>{valueSizes}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;