import express from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import './utils/global.js'
import adicionarRotas from './rotas.js';



const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log("API subiu na porta "+PORTA))

