import express from 'express';
const router = express.Router();

import {
  getFavoritesByUser,
  addFavorite,
  removeFavorite
} from '../controllers/favoriteController.js';

router.get('/favorite/:userId', getFavoritesByUser);
router.post('/favorite', addFavorite);
router.delete('/favorite', removeFavorite); // user_id e skin_id vêm no body

export default router;
