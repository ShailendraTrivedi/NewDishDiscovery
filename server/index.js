const express = require("express");
const { PORT } = require("./constant");
const Routers = require("./routes");
const Middleware = require("./middlewares");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is Working...");
});

app.use(Middleware);
app.use("/api", Routers);

app.listen(PORT || 5000, () => {
  console.log(`Server is started on PORT: http://localhost:${PORT}`);
});
