import "./WeatherForecast.css";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherForecastDay from "../WeatherForecastDay/WeatherForecastDay";

export default function WeaterForecast({ coordinates }) {
  let [isLoaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  const apiKey = `16854fb55399cdd51737d3f388b62c57`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  useEffect(() => setLoaded(false), [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function getForecast() {
    axios.get(apiUrl).then(handleResponse);
  }

  if (isLoaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map((dailyForecast, index) =>
          index < 5 ? (
            <WeatherForecastDay data={dailyForecast} key={index} />
          ) : null
        )}
      </div>
    );
  } else {
    getForecast();
  }
}
