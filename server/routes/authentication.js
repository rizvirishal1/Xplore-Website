import express from 'express';

const router = express.Router();


router.get('/signin', (req, res) => {
  res.send('signing in...');
});

router.get('/signup', (req, res) => {
  res.send('signing up...');
});




export default router;
