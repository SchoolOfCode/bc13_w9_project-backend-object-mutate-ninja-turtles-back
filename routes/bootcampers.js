import express from 'express';
const router = express.Router();
import {
  getBootcamperDataById,
  getBootcamperByName,
  addNewBootcamper,
} from '../models/bootcampers.js';

router.get('/', async function (req, res) {
  const result = await getBootcamperDataById();
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
