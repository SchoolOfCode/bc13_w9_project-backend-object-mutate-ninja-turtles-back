import Express from 'express';
import Morgan from 'morgan';
import cors from 'cors';

import { topicsRouter } from './routes/topics.js';
import { bootcampersRouter } from './routes/bootcampers.js';
import { reviewsRouter } from './routes/reviews.js';

const app = Express();
const PORT = process.env.port || 3001;

app.use(Morgan('dev'));
app.use(Express.json());
app.use(cors());

app.use('/api/bootcampers', bootcampersRouter);
app.use('/api/topics', topicsRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
