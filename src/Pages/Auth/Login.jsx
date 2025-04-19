import { useState } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    Swal.fire({
        title: 'Login Successful!',
        text: 'You have logged in successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
  };

  return (
    <div className="  min-h-screen w-1/3 mx-auto flex justify-center items-center">
      <form onSubmit={handleSubmit} className="card-body  w-full shadow-2xl">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <p>
            Don't Have Already Account please
            <NavLink to="/SingUp">
              <a className="link "> SingUp</a>
            </NavLink>
          </p>
          <NavLink to="/">
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </NavLink>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
