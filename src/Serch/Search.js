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

    const apiKey = `a32btaef1038a7d6469a901f8943eo6b`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios(apiUrl).then(updateWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function updateWeather(response) {
    setLoad(true);
    setWeather({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      desc: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
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
