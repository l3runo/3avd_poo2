import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import telaLogin from "./pages/telaLogin";
import registro from "./pages/registro";
import home from "./pages/home";
import novoEvento from "./pages/evento";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={telaLogin} />
                <Route path="/registro" component={registro} />
                <Route path="/home" component={home} />
                <Route path="/evento" component={novoEvento} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
