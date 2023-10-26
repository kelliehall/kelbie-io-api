import express, { Application, Request, Response } from 'express';
const app: Application = express();

// routes
const blogRoutes = require('./blog/blog-routes');

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});

app.use('/blog', blogRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});