import { Router } from 'express';
import skinRoutes from './skinRoutes.js';
import userRoutes from './userRoutes.js';
import favoriteRoutes from './favoriteRoutes.js';

const router = Router();

router.use('/skins', skinRoutes);
router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);

export default router;
