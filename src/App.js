import React, { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Hotel from "./components/Hotel";
import hotelsData from "./data";
import hotelsFiltered from "./functions/hotelsFiltered";
import notfound from "./icons/notfound.png";
import { locations, PRIZES, sizing } from "./functions/variables";
import "./App.css";

export default function App() {
  const initState = {
    dateFrom: "",
    dateTo: "",
    countries: locations.ALLCOUNTRIES,
    prizes: PRIZES,
    sizes: sizing.SIZES
  };

  const [filters, setFilters] = useState(initState);

  let filterList = hotelsFiltered(hotelsData, filters);

  return (
    <div className="App">
      <Header filtersValue={filters} />
      <Filters filtersValue={filters} setFilters={setFilters} />
      {filterList.length > 0 ? (
        <>
          <div className="card-container">
            {filterList.map((data, index) => {
              return (
                <Hotel
                  key={index}
                  slug={data.slug}
                  name={data.name}
                  photo={data.photo}
                  description={data.description}
                  availabilityFrom={data.availabilityFrom}
                  availabilityTo={data.availabilityTo}
                  rooms={data.rooms}
                  city={data.city}
                  country={data.country}
                  price={data.price}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="card-container-2">
          <p className="notfound-text">¡No encontramos lo que buscabas!</p>
          <img className="not_found_img" src={notfound} alt="not-found" />
        </div>
      )}
    </div>
  );
}
