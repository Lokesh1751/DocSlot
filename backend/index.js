const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const doteenv = require("dotenv");
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.bgCyan.white);
});
