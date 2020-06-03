import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      <h1> Login Form</h1>

      <form>
        <input type="text" placeholder="username"/> <br />
        <input type="password" placeholder="password"/> <br />
        <input type="submit" /> <br />
      </form>
    </div>
  );
}

export default App;
