import { findAll, findById, create, update, remove } from '../models/skinModel.js';
import { z } from 'zod';

const skinSchema = z.object({
  name: z.string().min(1, 'Nome da skin é obrigatório'),
  description: z.string().optional(),
  image_url: z.string().url('URL da imagem inválida'),
  species_class: z.enum(['vampiro', 'mago', 'lobisomem', 'cavaleiro', 'centauro']),
  is_official: z.boolean().optional(),
  user_id: z.number().int()
});

export const getSkins = async (req, res) => {
  try {
    const skins = await findAll();
    res.status(200).json(skins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar skins' });
  }
};

export const getSkinById = async (req, res) => {
  try {
    const { id } = req.params;
    const skin = await findById(id);

    if (!skin) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }

    res.status(200).json(skin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

export const createSkin = async (req, res) => {
  try {
    const skinData = skinSchema.parse(req.body);
    const result = await create(skinData); // retorna { id }

    res.status(201).json({
      message: 'Skin criada com sucesso',
      skinId: result.id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar skin' });
  }
};

export const updateSkin = async (req, res) => {
  try {
    const { id } = req.params;
    const skinData = skinSchema.parse(req.body);

    const updated = await update(id, skinData); // número de rows alteradas

    if (updated === 0) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }

    res.status(200).json({ message: 'Skin atualizada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar skin' });
  }
};

export const deleteSkin = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await remove(id);

    if (deleted === 0) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }

    res.status(200).json({ message: 'Skin deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar skin' });
  }
};
