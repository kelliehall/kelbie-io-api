import express, { Application } from 'express';
const app: Application = express();

const blogRoutes = require('./blog/blog-routes');
const healthcheckRoutes = require('./common/healthcheck');

app.use('/blog', blogRoutes);
app.use('/healthcheck', healthcheckRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});