import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Weather from "../Weather/Weather";

import "./Search.css";

export default function Serch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoaded, setLoad] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = `16854fb55399cdd51737d3f388b62c57`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios(apiUrl).then(updateWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function updateWeather(response) {
    setLoad(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <div className="wrap">
          <input
            type="serch"
            placeholder="Enter a city..."
            onChange={getCity}
            className="search-input"
          />

          <Button name="Search" />
        </div>
      </form>
      {isLoaded ? <Weather data={weather} /> : null}
    </div>
  );
}
