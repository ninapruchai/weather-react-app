export default function WeatherForecastDay(props) {
  console.log(props);

  function maxTemperature(max = props.data.temp.max) {
    return `${Math.round(max)}°`;
  }

  function minTemperature(min = props.data.temp.min) {
    return `${Math.round(min)}°`;
  }

  function showDay() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return week[day];
  }

  return (
    <div className="container-forecast">
      <p className="day">{showDay()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="sunny"
        className="day-icon"
      />
      <div className="temp">
        <p className="max">{maxTemperature()}</p>
        <p className="min">{minTemperature()}</p>
      </div>
    </div>
  );
}
