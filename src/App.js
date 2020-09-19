import React, { useState, useEffect } from "react";
import "./App.css";
import getCountries from "./services/getCountries";
import Form from "./components/form";
import CountriesDisplay from "./components/countriesDisplay";

function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  const handleFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    getCountries().then((response) => setCountries(response));
  }, []);
  return (
    <>
      <Form filter={filter} handleFilter={handleFilter} />
      <CountriesDisplay countries={countries} />
    </>
  );
}

export default App;
