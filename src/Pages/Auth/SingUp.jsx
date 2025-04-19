import { useState } from "react";
import { NavLink } from "react-router";

const SingUp = () => {
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
  };

  return (
    <div className="  min-h-screen w-1/3 mx-auto flex justify-center items-center">
     
          <form onSubmit={handleSubmit} className="card-body  w-full shadow-2xl">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                value={formData.email}
                onChange={handleChange}
                required
              />
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

             
              <p>If Your Have Already Account please 

              <NavLink to='/login'>
                <a className="link ">  LogIn</a>
              </NavLink>
              </p>
             <NavLink to='/login'>
             <button type="submit" className="btn btn-neutral mt-4">
                SingUp
              </button>
             
             </NavLink>
            </fieldset>
          </form>
        </div>
   
  );
};

export default SingUp;
