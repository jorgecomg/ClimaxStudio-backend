import con from './connection.js'

export async function salvarEvento(evento) {
    let comando = `
    INSERT INTO eventos (nome, email, telefone, data, local, mensagem, pacote) VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [evento.nome, evento.email, evento.telefone, evento.data, evento.local, evento.mensagem, evento.pacote]);

    let info = resposta[0];

    let idEvento = info.insertId;
    return idEvento;
}

export async function consultarEventos() {
    let comando = `
    SELECT * FROM eventos
    `

    let resposta = await con.query(comando)
    
    return resposta;
}

export async function deletarEventos(id) {
    let comando = `
    DELETE FROM eventos WHERE id = ?
    `

    let resposta = await con.query(comando, [id])
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}

export async function editarEvento(id, evento) {
    const comando = `
        UPDATE eventos
        SET 
            nome = ?, 
            email = ?, 
            telefone = ?, 
            data = ?, 
            local = ?, 
            mensagem = ?, 
            pacote = ?
        WHERE id = ?;
    `;

    const resposta = await con.query(comando, [
        evento.nome,
        evento.email,
        evento.telefone,
        evento.data,
        evento.local,
        evento.mensagem,
        evento.pacote,
        id,
    ]);

    const info = resposta[0];
    if (info.affectedRows === 0) {
        throw new Error("Evento não encontrado ou não foi possível atualizar.");
    }
}
