import config from 'config';
import express from 'express';

process.stdout.write(config.service.path);
// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  process.stdout.write(`Example app listening at http://localhost:${port}`);
});
