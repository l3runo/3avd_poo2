import { Router } from "express";

import usuariosRouter from "./users.routes";
import eventosRouter from "./events.routes";
import sessionRouter from "./sessions.routes";
import likesPostRouter from "./likesPost.routes";
import dislikesPostRouter from "./dislikesPost.routes";

const routes = Router();

routes.use("/sessions", sessionRouter);
routes.use("/usuarios", usuariosRouter);
routes.use("/eventos", eventosRouter);
routes.use("/dislikes", dislikesPostRouter);
routes.use("/likes", likesPostRouter);

export default routes;
