import "./Button.css";

export default function Button({ name }) {
  return (
    <button type="submit" className="search-button">
      {name}
    </button>
  );
}
