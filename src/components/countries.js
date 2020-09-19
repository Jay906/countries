import React from "react";

function Countries({ countries }) {
  return (
    <>
      {countries.map((country) => {
        return (
          <div key={country.name}>
            {country.name} &nbsp;
            <button>show</button>
          </div>
        );
      })}
    </>
  );
}

export default Countries;
