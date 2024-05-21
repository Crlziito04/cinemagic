const { arrayData } = require("./api");
const { refreshContainer } = require("./refreshContainer");

const movieFilter = (e) => {
  let valorIngresado = e.target.value.toLowerCase();
  console.log(valorIngresado);
  if (valorIngresado === "reset") {
    const filteredMovies = [...arrayData];
    return refreshContainer(filteredMovies);
  }
  const filteredMovies = arrayData.filter((peli) =>
    peli.genre
      .map((movieGenre) => movieGenre.toLowerCase())
      .includes(valorIngresado.toLowerCase())
  );
  refreshContainer(filteredMovies);
};

module.exports = { movieFilter };
