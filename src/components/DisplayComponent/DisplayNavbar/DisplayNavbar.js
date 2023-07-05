import { useState } from "react";
import "./DisplayNavbar.css";

function DisplayNavbar({ count, dispatch }) {
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
    dispatch({ type: "searchPassword", payload: e.target.value });
  }
  return (
    <div className="display-navbar">
      <div className="part-one">
        <span className="span-password-text">Your Password</span>
        <button className="password-count">{count}</button>
      </div>
      <div className="part-two">
        <div className="display-navbar-serch-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="display-navbar-serch-logo"
          />
        </div>

        <input
          type="search"
          onChange={handleChange}
          value={search}
          className="display-navbar-serch-input"
        />
      </div>
    </div>
  );
}

export default DisplayNavbar;
