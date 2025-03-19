import express from 'express';
const router = express.Router();

import paymentController from '../controlles/payment.controller.js';

router.post("/payment", paymentController.createPayment);
router.patch("/payment/:id", paymentController.updatePayment);

export default router;