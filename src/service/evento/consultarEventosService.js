import { consultarEventos } from "../../repository/eventoRepository.js";

export default async function consultarEventosService() {
    let registros = await consultarEventos();
    return registros;
}