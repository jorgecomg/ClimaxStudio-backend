import { consultarLogin } from "../../repository/loginRepository.js";
import { validarNovoLogin } from "../../validation/login/loginValidation.js";
export default async function consultarLoginService(loginObj) {
    validarNovoLogin(loginObj);

    let registros = await consultarLogin(loginObj);
    return registros;
}