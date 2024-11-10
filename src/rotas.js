import eventoController from './controller/eventoController.js'
import loginController from './controller/loginController.js'

export default function adicionarRotas(servidor) {
    servidor.use(eventoController)
    servidor.use(loginController)
}