import express from 'express';

import * as controller from './controller';

const authRouter = express.Router();

/** POST /api/auth */
authRouter.route('/').post(controller.create);

module.exports = authRouter;
