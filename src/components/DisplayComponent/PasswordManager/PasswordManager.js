import { useState } from "react";
import "./PasswordManager.css";

function PasswordManager({ count, showPassword, dispatch, filterList }) {
  const [togglePassword, setTogglePassword] = useState(false);

  function handleToggle() {
    setTogglePassword((prev) => !prev);
    dispatch({ type: "passwordToggle", payload: !togglePassword });
  }
  if (count === 0) {
    return (
      <div className="password-manager">
        <div className="password-manager-top">
          <input type="checkbox" className="checkbox" />
          <span className="showpassword-text">Show Passwords</span>
        </div>
        <div className="no-passwords-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords"
          />
        </div>
        <h1 className="no-passwords-heading">No Passwords</h1>
      </div>
    );
  }
  if (count > 0) {
    return (
      <div className="password-manager">
        <div className="password-manager-top">
          <input type="checkbox" className="checkbox" onClick={handleToggle} />
          <span className="showpassword-text">Show Passwords</span>
        </div>
        <ul className="list-container">
          {filterList.map((eachPassword, i) => (
            <li className="list-item-container" key={i}>
              <div className="initial-logo-container">
                <span className="initial-logo">
                  {eachPassword.website[0].toUpperCase()}
                </span>
              </div>
              <div className="details">
                <span>{eachPassword.website}</span>
                <br />
                <span>{eachPassword.userName}</span>
                <br />
                {showPassword ? (
                  <span>{eachPassword.password}</span>
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                    alt="stars"
                    className="hide"
                  />
                )}
                {/* <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="hide"
              /> */}
              </div>
              <div className="delelte-image-container">
                <button className="delete-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="delete"
                    onClick={() =>
                      dispatch({
                        type: "deletePassword",
                        payload: eachPassword.id,
                      })
                    }
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PasswordManager;
