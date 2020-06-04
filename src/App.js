import React from "react";
import "./App.css";
import Login from "./component/Login";
import Info from "./component/info";
function App() {
  var umair = true;

  return <div className="App">{umair ? <Login /> : <Info />}</div>;
}

export default App;
