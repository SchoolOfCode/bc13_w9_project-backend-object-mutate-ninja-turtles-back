import express from 'express';
const router = express.Router();
import {
  getBootcampers,
  getBootcamperByName,
  addNewBootcamper,
} from '../models/bootcampers.js';

//IMPORTANT: The GET '/' for bootcampers endpoint currently gets all topics and reviews 
//for bootcamper 1 - ie: NOT what you would expect it to do initially! 
// This is so that we have an initial endpoint to work with for connecting front and back end.
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
