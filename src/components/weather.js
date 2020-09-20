import React, { useState, useEffect } from "react";
import weatherApi from "../services/weather";

function Weather({ capital }) {
  const [weather, setWeather] = useState();
  useEffect(() => {
    weatherApi(capital).then((response) => setWeather(response));
  }, []);
  if (weather === undefined) {
    return <p>Loading...</p>;
  } else {
    console.log(weather);
    const {
      temperature,
      humidity,
      feelslike,
      weather_descriptions,
      weather_icons,
    } = weather;
    const icon = weather_icons[0];
    return (
      <>
        <h2>Weather in {capital}</h2>
        <p>
          {weather_descriptions[0]} <br />
          <strong>temperature: </strong> {temperature}&deg;C <br />
          <strong>feels like: </strong> {feelslike}&deg;C
        </p>
        <img src={icon} alt="loading..." />
        <div>
          <strong>humidity: </strong>
          {humidity}
        </div>
      </>
    );
  }
}

export default Weather;
