import React from "react";

function Country({ country }) {
  const _country = country[0];
  return (
    <>
      <h2>{_country.name}</h2>
      <div>capital: {_country.capital}</div>
      <div>population: {_country.population}</div>

      <h4>Languages</h4>
      <ul>
        {_country.languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={_country.flag} alt={`${_country.name}'s flag`} />
    </>
  );
}

export default Country;
