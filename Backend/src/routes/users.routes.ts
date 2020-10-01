import { Router } from "express";
import { getRepository } from "typeorm";

import UserController from "../app/controllers/UsuariosController";
import Usuarios from "../app/models/Usuarios";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const usuariosRouter = Router();

usuariosRouter.get("/", ensureAuthenticated, async (req, res) => {
    const userRepository = getRepository(Usuarios);
    const user = await userRepository.find();
    return res.status(200).json(user);
});

usuariosRouter.get("/:id", ensureAuthenticated, async (req, res) => {
    const userRepository = getRepository(Usuarios);
    const { id } = req.params;
    const user = await userRepository.findOne(id);
    return res.status(200).json(user);
});

usuariosRouter.post("/", ensureAuthenticated, async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        const userController = new UserController();
        const user = await userController.store({
            nome,
            email,
            password,
        });
        user.password = "****";
        return res.status(200).json(user);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

usuariosRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
    try {
        const userRepository = getRepository(Usuarios);
        const { id } = req.params;
        await userRepository.delete(id);
        return res.status(200).send();
    } catch (error) {
        return res.status(400).json({ Error: error });
    }
});

export default usuariosRouter;
