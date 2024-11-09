import con from './connection.js'

export async function realizarLogin(usuario) {
    let comando = `
    SELECT * FROM login WHERE email = ? AND senha = ?
    `

    let resposta = await con.query(comando, [usuario.email, usuario.senha]);
}