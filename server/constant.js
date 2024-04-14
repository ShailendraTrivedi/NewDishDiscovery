const dotenv = require("dotenv");
dotenv.config();
const { PORT, SECRET_JWT_KEY, ORIGIN_URL, MONGOS_URL } = process.env;
module.exports = {
  PORT,
  SECRET_JWT_KEY,
  ORIGIN_URL,
  MONGOS_URL,
};
