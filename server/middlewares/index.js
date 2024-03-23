const express = require("express");
const cors = require("cors");
const { Router } = express;

const Middleware = Router();
const middlewareCredentials = {
  origin: true,
  credentials: true,
};

Middleware.use(express.json());
Middleware.use(cors(middlewareCredentials));
Middleware.use(express.urlencoded({ extended: true }));

module.exports = Middleware;
