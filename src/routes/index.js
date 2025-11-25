import express from 'express';
const router = express.Router();



import userRoutes from './userRoutes.js';
import skinRoutes from './skinRoutes.js';
import favoriteRoutes from './favoriteRoutes.js';
import userRoutesMySQL from "./userRoutesMySQL.js"

router.use(userRoutes);
router.use(userRoutesMySQL);
router.use(skinRoutes);
router.use(favoriteRoutes);

export default router;
