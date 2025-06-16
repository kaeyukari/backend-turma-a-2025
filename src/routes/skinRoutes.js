import express from 'express';
const router = express.Router();

import {
  getSkins,
  getSkinById,
  createSkin,
  updateSkin,
  deleteSkin
} from '../controllers/skinController.js';

router.get('/skin', getSkins);
router.get('/skin/:id', getSkinById);
router.post('/skin', createSkin);
router.patch('/skin/:id', updateSkin);
router.delete('/skin/:id', deleteSkin);

export default router;
