//crear servidor
const express = require("express");
// const routerMovies = require("./routes/routerMovies");
// const routerHome = require("./routes/routerHome");
const routerIndex = require("./routes/routerIndex");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(routerIndex);
//error en validateId
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

module.exports = app;
