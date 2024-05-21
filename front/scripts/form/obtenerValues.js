const axios = require("axios");
const limpiarInputs = require("./limpiarInputs");
const validateData = require("./validateData");
const obtenerValues = (e) => {
  e.preventDefault();
  const inputTitle = document.getElementById("title");
  const inputYear = document.getElementById("year");
  const inputDirector = document.getElementById("director");
  const inputDuration = document.getElementById("duration");
  const inputGenre = document.getElementById("genre");
  const inputRate = document.getElementById("rate");
  const inputPoster = document.getElementById("poster");

  let title = inputTitle.value;
  let year = parseInt(inputYear.value);
  let director = inputDirector.value;
  let duration = inputDuration.value;
  let genre = inputGenre.value
    .split(" ")
    .map((str) => str.replace(/[^a-zA-Z0-9\s]/g, "").trim())
    .filter(Boolean);
  let rate = parseInt(inputRate.value);
  let poster = inputPoster.value;
  const movie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  };
  //validacion de datos
  validateData(movie);
  //*Limpiar valores
  limpiarInputs();
  //*Peticion
  axios
    .post("http://localhost:3000/movies", movie)
    .then((response) => {
      alert("Publicacion exitosa");
    })
    .catch((error) => {
      alert("Error en la solicitud:", error);
    });
};
module.exports = obtenerValues;
