import express, { Application } from 'express';
const app: Application = express();

// routes
const blogRoutes = require('./blog/blog-routes');
const healthcheckRoutes = require('./common/healthcheck');

app.use('/blog', blogRoutes);
app.use('/healthcheck', healthcheckRoutes);

// app.use('/', (req: Request, res: Response): void => {
//     res.send('Hello world!');
// });


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});