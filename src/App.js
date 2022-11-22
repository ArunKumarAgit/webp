import React from "react";
import MainRouting from "./router/mainRouting";
import "./App.css";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Link to="/lname">full name</Link>
      <hr></hr>
      <h1>welcome webpack</h1>

      <hr></hr>
      <Link to="/fname">fname</Link>
      <MainRouting />
    </div>
  );
};

export default App;
