// basic node js server in typescript
import config from 'config';
import express from 'express';

console.log(config.get('service'));
console.log(process.env.NODE_ENV);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

