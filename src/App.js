import express from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import './utils/global.js'
import adicionarRotas from './rotas.js';



const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

const PORT = process.env.PORT;
servidor.listen(PORT, () => console.log("API subiu na porta "+PORT))

