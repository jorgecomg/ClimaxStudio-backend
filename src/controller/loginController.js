import { Router } from "express";
const endpoints = Router();

import consultarLoginService from "../service/login/consultarLoginService.js";

endpoints.get('/login', async (req, resp) => {
    try {

        let loginObj = req.query;

        let registros = await consultarLoginService(loginObj);

        resp.send(registros);

    } catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error))
    }
})

export default endpoints;