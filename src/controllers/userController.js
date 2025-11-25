import { findAll, create, remove, update, updateRole } from '../models/userModel.js';
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Nome de usuário é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().optional(),
  role: z.enum(['parcial', 'user']).optional(),
  photo: z.string().optional()
});

const roleSchema = z.object({
  role: z.enum(['parcial', 'user'])
});

export const getUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = userSchema.parse(req.body);

    const result = await create(userData); // retorna { id }

    res.status(201).json({
      message: 'User created successfully',
      userId: result.id
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await remove(id); // número de linhas deletadas

    if (deleted === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao remover usuário' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await update(id, req.body);

    if (updated === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = roleSchema.parse(req.body);

    const updated = await updateRole(id, role);

    if (updated === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao atualizar papel do usuário' });
  }
};
