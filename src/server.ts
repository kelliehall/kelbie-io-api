import express, { Application, Request, Response } from 'express';
const app: Application = express();
const cassandra = require('cassandra-driver');
// const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1' });

// const query = 'INSERT INTO keyspace_name.table_name (column1, column2) VALUES (?, ?)';
// const params = ['value1', 'value2'];

// client.execute(query, params, { prepare: true })
//   .then(result => {
//     console.log('Data inserted successfully');
//   })
//   .catch(error => {
//     console.error('Error inserting data:', error);
//   });


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