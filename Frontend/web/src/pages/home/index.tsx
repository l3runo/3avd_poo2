import React from "react";
import { Link } from "react-router-dom";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

import "./styles.css";

const Dashboard: React.FC = () => {
    return (
        <div className="home-container">
            <div className="center">
                <header className="headermain">
                    <Link to="/evento" className="button-evento">
                        ADICIONAR EVENTO
                    </Link>
                    <Link to="/" className="button-evento btn-sair">
                        SAIR
                    </Link>
                </header>
                <div className="list-container">
                    <div className="item">
                        <img
                            src="https://source.unsplash.com/379x238/?party"
                            alt="event"
                        />
                        <div className="right-item">
                            <div className="lr">
                                <h1>Evento</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, doloribus.
                                    Laboriosam sapiente explicabo eos vitae
                                    nihil velit.
                                </p>
                                <h2>Local: Rio de Janeiro</h2>
                            </div>
                            <div className="ll">
                                <button className="like">
                                    <FiThumbsUp></FiThumbsUp> 0 Likes
                                </button>
                                <button className="like">
                                    <FiThumbsDown></FiThumbsDown> 0 Dislikes
                                </button>
                            </div>
                        </div>
                        <p className="deletar">X</p>
                    </div>
                    <div className="item">
                        <img
                            src="https://source.unsplash.com/379x238/?party"
                            alt="event"
                        />
                        <div className="right-item">
                            <div className="lr">
                                <h1>Evento</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, doloribus.
                                    Laboriosam sapiente explicabo eos vitae
                                    nihil velit.
                                </p>
                                <h2>Local: Rio de Janeiro</h2>
                            </div>
                            <div className="ll">
                                <button className="like">
                                    <FiThumbsUp></FiThumbsUp> 0 Likes
                                </button>
                                <button className="like">
                                    <FiThumbsDown></FiThumbsDown> 0 Dislikes
                                </button>
                            </div>
                        </div>
                        <p className="deletar">X</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
