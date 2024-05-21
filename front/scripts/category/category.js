const { api } = require("./api");
const { movieFilter } = require("./movieFilter");
const reset = document.getElementById("reset");
const action = document.getElementById("action");
const drama = document.getElementById("drama");
const comedy = document.getElementById("comedy");
const fantasy = document.getElementById("fantasy");
const adventure = document.getElementById("adventure");

api();
document.addEventListener("keyup", (e) => movieFilter(e));
reset.addEventListener("click", (e) => movieFilter(e));
drama.addEventListener("click", (e) => movieFilter(e));
action.addEventListener("click", (e) => movieFilter(e));
adventure.addEventListener("click", (e) => movieFilter(e));
fantasy.addEventListener("click", (e) => movieFilter(e));
comedy.addEventListener("click", (e) => movieFilter(e));
