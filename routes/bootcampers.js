const express = require('express');
const router = express.Router();
import {
  getBootcampers,
  getBootcampersByName,
  addNewBootcamper,
} from '../models/bootcampers';

router.get('/', async function (req, res) {
  const result = await getBootcampers();
  res.json({ success: true, payload: result });
});

router.get('/:name', async function (req, res) {
  const result = await getBootcampersByName(req.params.name);
  res.json({ success: true, payload: result });
});

router.post('/', async function (req, res) {
  const result = await addNewBootcamper(req.body);
  res.json({ success: true, payload: result });
});
