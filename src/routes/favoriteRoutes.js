import express from 'express';
const router = express.Router();

import {
  getFavoritesByUser,
  addFavorite,
  removeFavorite
} from '../controllers/favoriteController.js';

// Buscar favoritos de um usuário
router.get('/favorites/:userId', getFavoritesByUser);

// Adicionar favorito
router.post('/favorites', addFavorite);

// Remover favorito
router.delete('/favorites/:userId/:skinId', removeFavorite);

export default router;
