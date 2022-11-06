export default function FormatedDate({ date }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];
  const hours = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);

  return (
    <p className="date">
      {day}, {hours}:{minutes}
    </p>
  );
}
