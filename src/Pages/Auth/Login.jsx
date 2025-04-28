import React, { use } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import { Link } from "react-router";

const Login = () => {
  const { createUser } = use(AuthContext);
  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
  };
  const handleReset = () => {
    console.log("clicked");
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSingIn}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            autoComplete="email"
          />
          <label className="label">Password</label>
          <input
            required
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          
            autoComplete="current-password"
           name="password"
            className="input"
          placeholder="Password" />
          <div>
            <a onClick={handleReset} className="link link-hover">
              Forgot password?
            </a>
          </div>
          <br />
          <p>Don't have an account? Create one now! <Link to='/singUp' className="text-blue-400 underline">SingUp</Link> </p>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
