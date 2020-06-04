import React from "react";

function Login() {
  return (
    <div className="App">
      <h1> Welcome! my Login Page</h1>

      <h1> Login Form</h1>

      <form>
        <input type="text" placeholder="username" /> <br />
        <input type="password" placeholder="password" /> <br />
        <input type="submit" /> <br />
      </form>
    </div>
  );
}

export default Login;
