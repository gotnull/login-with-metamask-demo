import express from 'express';

import { authRouter } from './auth';
import { userRouter } from './users';

const services = express.Router();

services.use('/auth', authRouter);
services.use('/users', userRouter);

module.exports = services;
