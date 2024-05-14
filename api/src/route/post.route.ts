import express from 'express'

const router = express.Router();

router.get('/test', (req, res) => {
    res.end('posts get');
});

export default router;
