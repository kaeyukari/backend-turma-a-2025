import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api", routes);

// Rota inicial (teste)
app.get("/", (req, res) => {
  res.send("API funcionando - " + new Date());
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
