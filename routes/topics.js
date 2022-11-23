const express = require('express');
const router = express.Router();
import { getTopicByTitle, getTopics } from '../models/topics';

router.get('/', async function (req, res) {
  const result = await getTopics();
  res.json({ success: true, payload: result });
});

router.get('/:title', async function (req, res) {
  const result = await getTopicByTitle(req.params.title);
  res.json({ success: true, payload: result });
});
