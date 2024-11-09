import eventoController from './controller/eventoController.js'

export default function adicionarRotas(servidor) {
    servidor.use(eventoController)
}