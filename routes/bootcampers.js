import express from 'express';
const router = express.Router();
import {
  getBootcampers,
  getBootcamperByName,
  addNewBootcamper,
} from '../models/bootcampers.js';

router.get('/', async function (req, res) {
  const result = await getBootcampers();
  res.json({ success: true, payload: result });
});

router.get('/:name', async function (req, res) {
  const result = await getBootcamperByName(req.params.name);
  res.json({ success: true, payload: result });
});

router.post('/', async function (req, res) {
  const result = await addNewBootcamper(req.body);
  res.json({ success: true, payload: result });
});

export { router as bootcampersRouter };
