import express from 'express';
const router = express.Router();

router.get('/', async (_req, res, _next) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (e) {
        healthcheck.message = JSON.stringify(e);
        res.status(503).send();
    }
});

module.exports = router;