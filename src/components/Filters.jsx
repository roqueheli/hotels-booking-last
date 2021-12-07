import { locations, PRIZES, sizing } from "../functions/variables";
import { checkDate } from "../functions/functions";
import "../styles/filters.css";

const Filters = ({ filtersValue, setFilters }) => {
  const stateUpdate = (e) => {
    setFilters({
      ...filtersValue,
      [e.target.name]: e.target.value
    });
  };

  const cleanFields = (e) => {
    e.preventDefault();

    setFilters({
      dateFrom: "",
      dateTo: "",
      countries: locations.ALLCOUNTRIES,
      prizes: PRIZES,
      sizes: sizing.SIZES
    });
  };

  const checkingDate = checkDate(filtersValue);

  return (
    <div className="filters_container">
      <div className="filters">
        <input
          className={checkingDate ? "change-color" : null}
          placeholder="Cualquier fecha"
          value={filtersValue.dateFrom}
          onChange={stateUpdate}
          type="date"
          name="dateFrom"
          id="dateFrom"
        ></input>
        <input
          className={checkingDate ? "change-color" : null}
          placeholder="Cualquier fecha"
          value={filtersValue.dateTo}
          onChange={stateUpdate}
          type="date"
          name="dateTo"
          id="dateTo"
        ></input>
        <select
          value={filtersValue.countries}
          onChange={stateUpdate}
          name="countries"
          id="countries"
        >
          <option value={locations.ALLCOUNTRIES}>Todos los países</option>
          <option value={locations.ARG}>Argentina</option>
          <option value={locations.URU}>Uruguay</option>
          <option value={locations.CHL}>Chile</option>
          <option value={locations.BRA}>Brasil</option>
        </select>
        <select
          value={filtersValue.prizes}
          onChange={stateUpdate}
          name="prizes"
          id="prizes"
        >
          <option value={PRIZES}>Cualquier precio</option>
          <option value="1">$</option>
          <option value="2">$ $</option>
          <option value="3">$ $ $</option>
          <option value="4">$ $ $ $</option>
        </select>
        <select
          value={filtersValue.sizes}
          onChange={stateUpdate}
          name="sizes"
          id="sizes"
        >
          <option value={sizing.SIZES}>Cualquier tamaño</option>
          <option value={sizing.SMALL}>Pequeño</option>
          <option value={sizing.MEDIUM}>Mediano</option>
          <option value={sizing.BIG}>Grande</option>
        </select>
        <button className="btn" onClick={cleanFields} type="reset">
          🗑 Limpiar
        </button>
      </div>
    </div>
  );
};

export default Filters;
