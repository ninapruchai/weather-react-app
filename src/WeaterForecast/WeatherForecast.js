import "./WeatherForecast.css";

export default function WeaterForecast() {
  return (
    <div className="WeatherForecast">
      <div className="container-forecast">
        <p className="day">Thu</p>
        <img
          src={`http://openweathermap.org/img/wn/01d@2x.png`}
          alt="sunny"
          className="day-icon"
        />
        <div className="temp">
          <p className="max">20</p>
          <p className="min">10</p>
        </div>
      </div>
    </div>
  );
}
