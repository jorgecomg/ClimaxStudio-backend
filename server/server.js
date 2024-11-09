import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import path from 'path';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'senha123';

// Configuração do CORS para permitir que o React acesse o servidor Node.js
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware para configurar a Content Security Policy (CSP)
// Comentei a linha abaixo para garantir que não interfira na conexão, teste com ela comentada
/*
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' https://fonts.gstatic.com;");
  next();
});
*/

// Configuração do bodyParser para analisar requisições JSON
app.use(bodyParser.json());

// Configuração da Conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Climax'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Middleware para autenticar o token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(403).send("Token é necessário");

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send("Token inválido");
        req.user = user;
        next();
    });
};

// Rota de login com email e senha específicos
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;

    // Verifica se o email e senha correspondem ao login de administrador
    if (email === 'climax@gmail.com' && senha === 'climax') {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(403).json({ error: 'Credenciais inválidas' });
    }
});

// Exemplo de rota protegida para eventos, que requer autenticação
app.get('/api/eventos', authenticateToken, (req, res) => {
    // Esta rota requer o token para acessar os dados dos eventos
    db.query('SELECT * FROM Eventos', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar eventos' });
        } else {
            res.json(results);
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
