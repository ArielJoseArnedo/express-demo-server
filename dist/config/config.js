"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.production = exports.test = exports.heroku = exports.development = void 0;

require('dotenv').config();

var development = {
  host: process.env.DB_HOSTNAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.BD_PORT,
  dialect: "postgres",
  schema: "public",
  logging: process.env.DB_LOGGING
};
exports.development = development;
var heroku = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: 'postgres',
  url: process.env.DB_URL
};
exports.heroku = heroku;
var test = {
  dialect: "postgres"
};
exports.test = test;
var production = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: 'postgres',
  use_env_variable: 'DATABASE_URL'
};
exports.production = production;