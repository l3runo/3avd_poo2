import { Router } from "express";
import { getRepository } from "typeorm";
import multer from "multer";

import EventsController from "../app/controllers/EventosController";
import events from "../app/models/Eventos";
import uploadConfig from "../config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const eventosRouter = Router();
const upload = multer(uploadConfig);

eventosRouter.get("/:id", ensureAuthenticated, async (req, res) => {
    try {
        const eventosRepositorio = getRepository(events);
        const { id } = req.params;
        const evento = await eventosRepositorio.findOne(id);
        return res.status(200).json(evento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

eventosRouter.get("/", ensureAuthenticated, async (req, res) => {
    try {
        const eventosRepositorio = getRepository(events);
        const evento = await eventosRepositorio.find();
        return res.status(200).json(evento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

eventosRouter.post(
    "/",
    ensureAuthenticated,
    upload.single("picture_used"),
    async (req, res) => {
        try {
            const { criador_evento_id, name, place, bio } = req.body;
            const eventsController = new EventsController();
            const evento = await eventsController.store({
                criador_evento_id,
                name,
                place,
                picture_used: req.file.filename,
                bio,
            });
            return res.status(200).json(evento);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);

eventosRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
    const usuariosRepositorio = getRepository(events);
    const { id } = req.params;
    const usuario_logged = req.user.id;
    const repo = await usuariosRepositorio.findOne(id);
    if (repo) {
        if (repo.criador_evento_id == usuario_logged) {
            await usuariosRepositorio.delete(id);
            return res.status(200).json(id);
        } else {
            return res.status(400).json({
                Error: "Só o criador pode deletar",
                usuario_logged,
                id,
            });
        }
    } else {
        return res.status(400).json({
            Error: "Nenhum evento achado",
        });
    }
});

export default eventosRouter;
