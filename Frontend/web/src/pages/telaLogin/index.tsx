import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Login: React.FC = () => {
    return (
        <div className="container">
            <form className="form-login">
                <h1>LOGIN</h1>
                <div className="group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" />
                </div>
                <div className="group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit" className="buttonmain">
                    ENTRAR
                </button>

                <Link to="/registro" className="registrobtn">
                    {" "}
                    Registrar
                </Link>
            </form>
        </div>
    );
};

export default Login;
