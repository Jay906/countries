import React from "react";

function Countries({ countries, handleFilter }) {
  return (
    <>
      {countries.map((country) => {
        return (
          <div key={country.name}>
            {country.name} &nbsp;
            <button onClick={() => handleFilter(country.name)}>show</button>
          </div>
        );
      })}
    </>
  );
}

export default Countries;
