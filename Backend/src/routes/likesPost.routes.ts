import { getRepository } from "typeorm";
import { Router } from "express";

import Eventos from "../app/models/Eventos";

const eventosRouter = Router();

eventosRouter.post("/", async (req, res) => {
    const eventosRespository = getRepository(Eventos);
    try {
        const { evento_id } = req.body;
        const eventoOcorrido = await eventosRespository.findOne({
            where: { id: evento_id },
        });
        if (eventoOcorrido) {
            eventoOcorrido.likes = eventoOcorrido.likes + 1;
            await eventosRespository.save(eventoOcorrido);
            return res.status(200).json(eventoOcorrido);
        }
        if (!eventoOcorrido) {
            throw new Error("Erro no envio");
        }
        return res.json({ Message: "Algo deu errado" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default eventosRouter;
