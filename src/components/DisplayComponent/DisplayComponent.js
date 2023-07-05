import "./DisplayComponent.css";
// import DisplayNavbar from "./DisplayNavbar/DisplayNavbar";
// import PasswordManager from "./PasswordManager/PasswordManager";

function DisplayComponent({ children }) {
  return (
    <div className="display-container">
      {/* <DisplayNavbar />
      <hr />
      <PasswordManager /> */}
      {children}
    </div>
  );
}

export default DisplayComponent;
