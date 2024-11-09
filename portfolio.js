const express = require('express');
const multer = require('multer');
const db = require('../db'); // Supondo que você tenha uma conexão com o banco de dados configurada em 'db.js'
const { authenticateToken } = require('../auth'); // Função de autenticação (ex: JWT)

const router = express.Router();

// Configuração do multer para armazenar as imagens
const upload = multer({ dest: 'uploads/' });

// Rota POST para adicionar uma imagem ao portfólio
router.post('/', authenticateToken, upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const sql = 'INSERT INTO portfolio (title, description, imageUrl) VALUES (?, ?, ?)';
    db.query(sql, [title, description, imageUrl], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Imagem adicionada ao portfólio com sucesso!' });
    });
});

module.exports = router;
