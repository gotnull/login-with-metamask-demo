import '../../build/db';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { services } from '../../build/services';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);

module.exports = app;
