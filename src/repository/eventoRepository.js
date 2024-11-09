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