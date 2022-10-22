export default function Weather({ data }) {
  return (
    <ul className="data">
      <li>Temperature: {data.temperature}°C</li>
      <li>Description: {data.desc}</li>
      <li>Humidity: {data.humidity}%</li>
      <li>Wind: {data.wind}km/h</li>
      <li>
        <img src={data.icon} alt={data.desc} />
      </li>
    </ul>
  );
}
