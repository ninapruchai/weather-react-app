export default function props({ props }) {
  console.log(props);
  return (
    <ul className="props">
      <li>Temperature: {props.temperature}°C</li>
      <li>Description: {props.desc}</li>
      <li>Humidity: {props.humidity}%</li>
      <li>Wind: {props.wind}km/h</li>
      <li>
        <img src={props.icon} alt={props.desc} />
      </li>
    </ul>
  );
}
