import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Register: React.FC = () => {
    return (
        <div className="container">
            <form className="form-login">
                <h1>REGISTRO</h1>
                <div className="group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" />
                </div>
                <div className="group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit" className="buttonmain">
                    REGISTRAR
                </button>
                <Link to="/" className="registrobtn">
                    {" "}
                    <FiArrowLeft></FiArrowLeft>Voltar
                </Link>
            </form>
        </div>
    );
};

export default Register;
