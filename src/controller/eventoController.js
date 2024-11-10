import { Router } from "express";
const endpoints = Router();

import salvarEventoService from "../service/evento/salvarEventoService.js";
import consultarEventosService from "../service/evento/consultarEventosService.js";
import deletarEventosService from "../service/evento/deletarEventoService.js";

endpoints.post('/evento', async (req, resp) => {
    try {
        let eventoObj = req.body;
    
        let id = await salvarEventoService(eventoObj);
    
        resp.send({
            id: id
        }) 
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err))
    }
    

})

endpoints.get('/evento', async (req, resp) => {
    try {
        let registros = await consultarEventosService();
        

        registros.pop(); 
        
        resp.send(registros);
    } catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error));
    }
});

endpoints.delete('/evento/:id', async (req, resp) => {
    try {

        let id = req.params.id; 

       await deletarEventosService(id);

       resp.status(204).send();

    } catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error))
    }
})

export default endpoints;