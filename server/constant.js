const dotenv = require("dotenv");
dotenv.config();
const { PORT, SECRET_JWT_KEY } = process.env;
module.exports = {
  PORT,
  SECRET_JWT_KEY,
};
