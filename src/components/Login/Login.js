import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import { useAuthContext } from "../../contexts/AuthContext";

import './Login.css';


export const Login = () => {
  const LoginFormKeys = {
    Email: "email",
    Password: "password",
  };
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  

  return (
    <>
      <section id="login-page" className="auth">
        <form id="login" method="POST" onSubmit={onSubmit}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1 className="page-name">Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Sokka@gmail.com"
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
            />

            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
            />
            <input type="submit" className="btn-submit" value="Login" />                    
            <p className="field">
              <span>
                If you don't have profile click <Link to="/register">here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>      
    </>
  );
};
