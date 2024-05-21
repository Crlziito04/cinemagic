const { getHome, postHome } = require("../controllers/controllerHome");
const { Router } = require("express");

const routerHome = Router();

routerHome.get("/", getHome);
routerHome.post("/", postHome);

module.exports = routerHome;
