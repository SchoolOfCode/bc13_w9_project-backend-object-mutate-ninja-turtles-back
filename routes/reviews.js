import express from 'express';
const router = express.Router();
import {
  getReviews,
  getReviewById,
  addReview,
  updateReview,
} from '../models/reviews.js';

router.get('/', async function (req, res) {
  const result = await getReviews();
  res.json({ success: true, payload: result });
});

router.get('/:id', async function (req, res) {
  const result = await getReviewById(req.params.id);
  res.json({ success: true, payload: result });
});

router.post('/', async function (req, res) {
  const result = await addReview(req.body);
  res.json({ success: true, payload: result });
});

router.patch('/:id', async function (req, res) {
  const result = await updateReview(req.params.id, req.body);
  res.json({ success: true, payload: result });
});

export { router as reviewsRouter };
