const express = require("express");
const validateId = require("../middlewares/validateId");
const {
  getMovies,
  postMovies,
  deleteMovies,
} = require("../controllers/controllerMovies");
const routerMovies = express.Router();

routerMovies.get("/", getMovies);
routerMovies.post("/", postMovies);
routerMovies.delete("/:id", validateId, deleteMovies);

module.exports = routerMovies;
