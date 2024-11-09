import { salvarEvento } from "../../repository/eventoRepository.js"; 
import { validarNovoEvento } from "../../validation/evento/eventoValidation.js";

export default async function salvarEventoService(eventoObj) {
    validarNovoEvento(eventoObj);

    let id = await salvarEvento(eventoObj);
    return id;


}