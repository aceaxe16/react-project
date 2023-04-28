import { Link } from "react-router-dom";
import { useContext } from "react";

import{useForm} from '../../hooks/useForm';

import {AuthContext} from '../../contexts/AuthContext';

import './Register.css';

export const Register = () => {
    const LoginFormKeys = {
        Email: "email",
        Password: "password",
        ConfirmPassword: "confirmPassword"
      };

    const {onRegisterSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]:'',
        [LoginFormKeys.Password]: '',
        [LoginFormKeys.ConfirmPassword]: '',
    },onRegisterSubmit)

   
    return (
        <section id="register-page" className="content auth">
            <form id="register" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1 className="page-name">Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name= {LoginFormKeys.Email}
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={LoginFormKeys.Password}
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={LoginFormKeys.ConfirmPassword}
                        id="confirm-password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />

                    <input className="btn-submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}