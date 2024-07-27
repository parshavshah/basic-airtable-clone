import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        className="w3-bar "
        style={{ backgroundColor: "#7c37ef", color: "#fff" }}
      >
        <span className="w3-bar-item">WindTable</span>
       
        <Link to="/u/home" className="w3-bar-item w3-button">Home</Link>
        <Link to="/u/create-table" className="w3-bar-item w3-button">Create New Table</Link>
       
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
      </div>
    </>
  );
}
