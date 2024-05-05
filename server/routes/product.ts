import express from 'express';
import request from 'superagent';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const productRes = await request.get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product');
    res.json(productRes.body);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send('Something went wrong');
    }
  }
});

export default router;