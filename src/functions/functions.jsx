import { days, months } from "../functions/variables";
import { locations, PRIZES, sizing, values } from "../functions/variables";

const putDates = ({ dateFrom, dateTo }) => {
  let message = "";
  if (dateFrom === "" && dateTo === "") {
    message = "En cualquier fecha";

  } else if (new Date(dateFrom).getTime() > new Date(dateTo).getTime()) {
    message = `El rango de fechas ingresado no es correcto`;

  } else if (dateFrom !== "" && dateTo === "") {
    message = `Desde el ${days[new Date(dateFrom + " 00:00:00").getDay()]} 
    ${new Date(dateFrom + " 00:00:00").getDate()} de 
    ${months[new Date(dateFrom + " 00:00:00").getMonth()]} de 
    ${new Date(dateFrom + " 00:00:00").getFullYear()}`;
    
  } else if (dateFrom === "" && dateTo !== "") {
    message = `Hasta el ${days[new Date(dateTo + " 00:00:00").getDay()]} 
    ${new Date(dateTo + " 00:00:00").getDate()} de 
    ${months[new Date(dateTo + " 00:00:00").getMonth()]} de 
    ${new Date(dateTo + " 00:00:00").getFullYear()}`;
  } else if (dateFrom !== "" && dateTo !== "") {
    message = `Desde el ${days[new Date(dateFrom + " 00:00:00").getDay()]} 
    ${new Date(dateFrom + " 00:00:00").getDate()} de 
    ${months[new Date(dateFrom + " 00:00:00").getMonth()]} de 
    ${new Date(dateFrom + " 00:00:00").getFullYear()} Hasta el ${
      days[new Date(dateTo + " 00:00:00").getDay()]
    } 
    ${new Date(dateTo + " 00:00:00").getDate()} de 
    ${months[new Date(dateTo + " 00:00:00").getMonth()]} de 
    ${new Date(dateTo + " 00:00:00").getFullYear()}`;
  }
  return message;
};

const putCountries = ({ countries }) => {
  let message = "";
  if (countries === locations.ALLCOUNTRIES) {
    message = `En cualquier país`;
  } else if (countries === locations.ARG) {
    message = `En Argentina`;
  } else if (countries === locations.CHL) {
    message = `En Chile`;
  } else if (countries === locations.URU) {
    message = `En Uruguay`;
  } else {
    message = `En Brasil`;
  }
  return message;
};

const putPrices = ({ prizes }) => {
  let message = "";
  if (prizes === PRIZES) {
    message = `De cualquier precio`;
  } else if (prizes <= 1) {
    message = values.CHEAP;
  } else if (prizes > 1 && prizes < 3) {
    message = values.CONFORT;
  } else if (prizes > 3) {
    message = values.MAGNIFICENT;
  } else {
    message = values.LUXURY;
  }
  return message;
};

const putSizes = ({ sizes }) => {
  let message = "";
  if (sizes === sizing.SIZES) {
    message = "De cualquier tamaño";
  } else if (sizes === sizing.SMALL) {
    message = `De tamaño pequeño`;
  } else if (sizes === sizing.MEDIUM) {
    message = `De tamaño mediano`;
  } else {
    message = `De tamaño grande`;
  }
  return message;
};

const setPrice = ({ price }) => {
  let priceValue = [];
  for (let index = 0; index < 4; index++) {
    priceValue.push(
      <p className={index < price ? "colorOn" : "colorOff"} key={index}>
        $
      </p>
    );
  }
  return priceValue;
};

const getDateFrom = ({ availabilityFrom }) => {
  return (
    <>
      Desde el {days[new Date(availabilityFrom).getDay()]},{" "}
      {new Date(availabilityFrom).getDate()} de{" "}
      {months[new Date(availabilityFrom).getMonth()]} de{" "}
      {new Date(availabilityFrom).getFullYear()}
    </>
  );
};

const getDateTo = ({ availabilityTo }) => {
  return (
    <>
      Hasta el {days[new Date(availabilityTo).getDay()]},{" "}
      {new Date(availabilityTo).getDate()} de{" "}
      {months[new Date(availabilityTo).getMonth()]} de{" "}
      {new Date(availabilityTo).getFullYear()}
    </>
  );
};

const checkDate = ({ dateFrom, dateTo }) => {
  if (
    new Date(dateFrom).setHours(0, 0, 0, 0) >
    new Date(dateTo).setHours(0, 0, 0, 0)
  ) {
    return true;
  } else {
    return false;
  }
};

export {
  putDates,
  putCountries,
  putPrices,
  putSizes,
  setPrice,
  getDateFrom,
  getDateTo,
  checkDate
};