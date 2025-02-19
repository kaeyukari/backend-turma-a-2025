import express from 'express';
const router = express.Router();

import paymentController from '../controlles/payment.controller.js';

router.post('/', paymentController.createPayment);

export default router;