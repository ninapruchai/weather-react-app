import FormatedDate from "../FormatedDate/FormatedDate.js";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";

export default function Weather({ data }) {
  return (
    <div>
      <div className="weather-location">
        <p className="location">{data.city}</p>
        <FormatedDate date={data.date} />
      </div>
      <ul className="data">
        <li className="temperature">{data.temperature}</li>

        <li className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt={data.desc}
          />
          <span className="desc">{data.desc}</span>
        </li>
        <li className="humidity">
          <FontAwesomeIcon icon={faWater} color="#53ccdb" />
          Humidity: {data.humidity}%
        </li>
        <li className="wind">
          <FontAwesomeIcon icon={faWind} color="#53ccdb" />
          Wind: {data.wind}km/h
        </li>
      </ul>
    </div>
  );
}
