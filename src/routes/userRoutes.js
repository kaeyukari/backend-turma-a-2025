import express from 'express';
const router = express.Router();

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  updateUserRole
} from '../controllers/userController.js';

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUser);

// Atualizar role do usuário
router.patch('/users/:id/role', updateUserRole);

export default router;
