import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import InputComponent from "./components/InputComponent/InputComponent";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent.js";
import DisplayNavbar from "./components/DisplayComponent/DisplayNavbar/DisplayNavbar";
import PasswordManager from "./components/DisplayComponent/PasswordManager/PasswordManager";
import { useReducer } from "react";

const initialState = {
  passwordArray: [],
  totalPassword: 0,
  showPassword: false,
  query: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "setPassword":
      return {
        ...state,
        passwordArray: [...state.passwordArray, action.payload],
        totalPassword: state.totalPassword + 1,
      };

    case "passwordToggle":
      return {
        ...state,
        showPassword: action.payload,
      };

    case "deletePassword":
      console.log(action.payload);
      return {
        ...state,
        passwordArray: state.passwordArray.filter(
          (eactItem) => eactItem.id !== action.payload
        ),
        totalPassword: state.passwordArray.length - 1,
      };

    case "searchPassword":
      return {
        ...state,
        query: action.payload.toLowerCase().split(" ").join(),
      };

    default:
      throw new Error("Unhandle Event");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { passwordArray, showPassword, query } = state;

  const filterList = passwordArray.filter((item) =>
    item.website.toLowerCase().split(" ").join().includes(query)
  );

  return (
    <div className="app">
      <NavBar />
      <InputComponent dispatch={dispatch} />
      <DisplayComponent>
        <DisplayNavbar count={filterList.length} dispatch={dispatch} />
        <hr />
        <PasswordManager
          passwordArray={passwordArray}
          count={filterList.length}
          showPassword={showPassword}
          dispatch={dispatch}
          filterList={filterList}
        />
      </DisplayComponent>
    </div>
  );
}

export default App;
