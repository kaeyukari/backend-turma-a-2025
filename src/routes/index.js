import express from 'express';
const router = express.Router();



import userRoutes from './userRoutes.js';
import skinRoutes from './skinRoutes.js';
import favoriteRoutes from './favoriteRoutes.js';

router.use(userRoutes);
router.use(skinRoutes);
router.use(favoriteRoutes);

export default router;
