import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

const NewEvent: React.FC = () => {
    return (
        <div className="container">
            <form className="form-login form-evento">
                <h1>NOVO EVENTO</h1>
                <div className="group">
                    <label htmlFor="email">Nome</label>
                    <input type="text" name="email" />
                </div>
                <div className="group">
                    <label htmlFor="dfgdfg">Local</label>
                    <input type="text" name="dfgdfg" />
                </div>
                <div className="group">
                    <label htmlFor="qweqwe">Comentário</label>
                    <input type="text" name="qweqwe" />
                </div>
                <div className="group">
                    <label htmlFor="asdasd">Imagem</label>
                    <input type="file" name="asdasd" />
                </div>
                <button type="submit" className="btnmain">
                    CADASTRAR
                </button>
                <Link to="/home">
                    {" "}
                    <FiArrowLeft></FiArrowLeft>Voltar
                </Link>
            </form>
        </div>
    );
};

export default NewEvent;
