import { deletarEventos } from "../../repository/eventoRepository.js";

export default async function deletarEventosService(id) {
    let linhasAfetadas = await deletarEventos(id);
    
    if (linhasAfetadas == 0 )
        throw new Error('Nenhum evento com esse id foi encontrado')
}