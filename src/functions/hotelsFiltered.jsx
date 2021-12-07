import { locations, PRIZES, sizing } from "./variables";

const hotelsFiltered = (hotelsData, filters) => {
  const { dateFrom, dateTo, countries, prizes, sizes } = filters;
  const newHotelsList = hotelsData
    .filter((hotels) => {
      if (dateFrom !== "" && dateTo !== "") {
        return (
          new Date(hotels.availabilityFrom).setHours(0, 0, 0, 0) >=
            new Date(dateFrom + " 00:00:00").getTime() &&
          new Date(hotels.availabilityTo).setHours(0, 0, 0, 0) <=
            new Date(dateTo + " 00:00:00").getTime()
        );
      }
      return hotels;
    })
    .filter(({ country }) => {
      if (countries !== locations.ALLCOUNTRIES) {
        return country.toUpperCase() === countries.toUpperCase();
      }
      return country;
    })
    .filter(({ price }) => {
      if (prizes !== PRIZES) {
        return price.toString() === prizes;
      }
      return price;
    })
    .filter(({ rooms }) => {
      if (sizes !== sizing.SIZES) {
        if (sizes === sizing.SMALL) {
          return rooms < 11;
        } else if (sizes === sizing.MEDIUM) {
          return rooms > 10 && rooms < 21;
        } else {
          return rooms > 20;
        }
      }
      return rooms;
    });
  return newHotelsList;
};

export default hotelsFiltered;
