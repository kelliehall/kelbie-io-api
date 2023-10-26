import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    res.json({ message: `Blog post ${postId}` });
});

router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    res.json({ message: `Blog post ${category}` });
});

router.post('/posts', (req, res) => {
    res.json({ message: 'New blog post created' });
});

// Update a specific blog post
router.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    res.json({ message: `Blog post ${postId} updated` });
});

router.get('/', (req: Request, res: Response): void => {
    res.send([]);
});

module.exports = router;