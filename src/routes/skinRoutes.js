import express from 'express';
const router = express.Router();

import {
  getSkins,
  getSkinById,
  createSkin,
  updateSkin,
  deleteSkin
} from '../controllers/skinController.js';

router.get('/skins', getSkins);
router.get('/skins/:id', getSkinById);
router.post('/skins', createSkin);
router.patch('/skins/:id', updateSkin);
router.delete('/skins/:id', deleteSkin);

export default router;
