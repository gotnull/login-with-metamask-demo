"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const services_1 = require("./services");
const app = express_1.default();
// Middlewares
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// Mount REST on /api
app.use('/api', services_1.services);
module.exports = app;
