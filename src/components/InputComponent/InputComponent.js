import "./InputComponent.css";
import UserPassword from "./UserPassword/UserPassword";

function InputComponent({ dispatch }) {
  return (
    <div className="input-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="password manager"
        className="small-screen-logo"
      />

      <UserPassword dispatch={dispatch} />
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="large-screen-logo"
      />
    </div>
  );
}

export default InputComponent;
