import { useState } from "react";
import "./UserPassword.css";
import { v4 as uniqueId } from "uuid";

function UserPassword({ dispatch }) {
  const [website, setWebsite] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (website && userName && password) {
      const newPassword = {
        id: uniqueId(),
        website,
        userName,
        password,
      };
      dispatch({ type: "setPassword", payload: newPassword });
    }
    setWebsite("");
    setUserName("");
    setPassword("");
  }

  return (
    <div className="user-card">
      <h1 className="password-heading">Add New Password</h1>
      <div className="input-contanier">
        <div className="logo-contanier">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="logo"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Website"
            className="input-field"
            required
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className="input-contanier">
        <div className="logo-contanier">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
            alt="username"
            className="logo"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            className="input-field"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="input-contanier">
        <div className="logo-contanier">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="logo"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="add-btn" type="button" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default UserPassword;
