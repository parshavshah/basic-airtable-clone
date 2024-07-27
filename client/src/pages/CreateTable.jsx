import { useState } from "react";
import Header from "../components/Header";

export default function CreateTable() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="w3-cell-row">
        <Header />
      </div>
      <div className="w3-container w3-row">
        <h2>Create New Table</h2>
      </div>
      <div className="w3-container w3-row">
        <form>
          <label className="w3-text-blue">
            <b>Table Name</b>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w3-input w3-border"
            placeholder="Enter table name"
            type="text"
          />
          <br />
          <button className="w3-btn w3-blue">Create</button>
        </form>
      </div>
    </>
  );
}
