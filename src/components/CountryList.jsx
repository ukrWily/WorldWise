import PropTypes from "prop-types";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
