import express from 'express';
import rootRoutes from './routes/index.js';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", rootRoutes);

server.get("/", (req, res) => {
    res.status(200).send("Primeira Rota do Backens");
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})