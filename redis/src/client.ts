import { Redis } from "ioredis";

export const client = new Redis();

module.exports = {client};