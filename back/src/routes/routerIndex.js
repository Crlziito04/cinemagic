const { Router } = require("express");
const routerIndex = Router();
const routerHome = require("./routerHome");
const routerMovies = require("./routerMovies");

routerIndex.use("/", routerHome);
routerIndex.use("/movies", routerMovies);

module.exports = routerIndex;
