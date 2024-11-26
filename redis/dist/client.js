"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ioredis_1 = require("ioredis");
exports.client = new ioredis_1.Redis();
module.exports = { client: exports.client };
