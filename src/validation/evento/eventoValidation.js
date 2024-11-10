export async function validarNovoEvento(eventoObj) {
    if (!eventoObj.nome)
        throw new Error('Nome do evento obrigatório')

    if (!eventoObj.email)
        throw new Error('Email obrigatório')

    if (!eventoObj.telefone)
        throw new Error('Telefone obrigatório')

    if (!eventoObj.data)
        throw new Error('Data do evento obrigatório')

    if (!eventoObj.local)
        throw new Error('Local do evento obrigatório')

    if (!eventoObj.mensagem)
        throw new Error('Descrição do evento obrigatório')

    if (!eventoObj.pacote)
        throw new Error('Pacote obrigatório')

}