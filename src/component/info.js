import React from "react";

function Info() {
  return (
    <div className="App">
      <h1> Info component </h1>

      <form>
        <input type="text" placeholder="Firstname" /> <br />
        <input type="text" placeholder="Lastname" /> <br />
        <input type="submit" /> <br />
      </form>
    </div>
  );
}

export default Info;
