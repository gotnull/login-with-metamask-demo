import '../../backend/src/db';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { services } from '../../backend/src/services';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);

//const port = process.env.PORT;
//app.listen(port, () => console.log(`Express app listening on: ${port}`));

module.exports = app;
