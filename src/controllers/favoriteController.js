import { findByUser, create, remove } from '../models/favoriteModel.js';
import { z } from 'zod';

const favoriteSchema = z.object({
  user_id: z.number().int(),
  skin_id: z.number().int()
});

export const getFavoritesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const favorites = await findByUser(userId);

    if (!favorites || favorites.length === 0) {
      return res.status(200).json({
        message: "Você ainda não possui skins favoritadas.",
        favorites: []
      });
    }

    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar favoritos' });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const data = favoriteSchema.parse(req.body);

    const result = await create(data);

    res.status(201).json({
      message: 'Skin favoritada',
      favoriteId: result.id // PostgreSQL retorna { id }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao favoritar skin' });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const data = favoriteSchema.parse(req.body);

    const deleted = await remove(data.user_id, data.skin_id);

    if (deleted === 0) {
      return res.status(404).json({ message: 'Favorito não encontrado' });
    }

    res.status(200).json({ message: 'Favorito removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao remover favorito' });
  }
};
