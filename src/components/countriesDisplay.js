import React from "react";
import Countries from "./countries";
import Country from "./country";

function CountriesDisplay({ countries, filter, handleFilter }) {
  const showCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (showCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (showCountries.length === 1) {
    return <Country country={showCountries} />;
  }
  return <Countries countries={showCountries} handleFilter={handleFilter} />;
}

export default CountriesDisplay;
