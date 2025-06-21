import express from 'express';
import cors from 'cors';
import { gerarSenha } from './utils/geradorSenha.js';

const app = express();
const PORT = 3333;

app.use(cors());

app.get('/senha', (req, res) => {
    try {

        const length = parseInt(req.query.length) || 8;
        const numbers = req.query.numbers === 'true';
        const caps = req.query.caps === 'true';
        const symbols = req.query.symbols === 'true';

        if (isNaN(length) || length < 6 || length > 64) {
            return res.status(400).json({ error: 'O comprimento deve ser um número entre 6 e 64.' });
        }
        
        const senha = gerarSenha(length, numbers, caps, symbols);
        
        res.json({ password: senha });
    } catch (error) {
        console.error('Erro ao gerar senha:', error);
        res.status(500).json({ error: 'Erro ao gerar senha' });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});