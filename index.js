import express from 'express';
import { connection } from './postgres/postgresh.js';
import router from './view/routes.js';

const app = express();

app.use(express.json());

app.use(router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

connection();
