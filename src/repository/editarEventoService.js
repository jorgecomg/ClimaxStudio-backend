import { editarEvento } from "../../repository/eventoRepository.js";

export default async function editarEventoService(id, eventoObj) {

    await editarEvento(id, eventoObj); 
}
