"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/**
 * JWT config.
 */
exports.config = {
    algorithms: ['HS256'],
    secret: 'shhhh', // TODO Put in process.env
};
