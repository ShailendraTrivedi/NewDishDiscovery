const express = require("express");
const mongoose = require("mongoose");
const { PORT, MONGOS_URL } = require("./constant");
const Routers = require("./routes");
const Middleware = require("./middlewares");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is Working...");
});

app.use(Middleware);
app.use("/api", Routers);

// ! ------------------------------ Database and Server Connection ------------------------------

mongoose
  .connect(MONGOS_URL)
  .then((result) => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.log(err);
  });
try {
  app.listen(PORT || 5000, () => {
    console.log(`Server is started on PORT: http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error);
}
