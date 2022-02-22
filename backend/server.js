import 'dotenv/config';

import express from 'express';

const app = express();
const port = process.env.PORT;

app.disable('x-powered-by');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
