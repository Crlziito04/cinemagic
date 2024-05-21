const { getMovies } = require("../controllers/controllerMovies.js");
const Movie = require("../models/Movie.js");
const { MovieError } = require("./utils/errors/error.js");

module.exports = {
  getMovies: async () => {
    const allMovies = await Movie.find();
    if (!allMovies) throw new MovieError("Movies not found");
    return allMovies;
  },
  postMovies: async ({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  }) => {
    const newMovie = new Movie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    const saveMovie = await newMovie.save();
    return saveMovie;
  },
  deleteMovies: async (id) => {
    const movies = await Movie.findByIdAndDelete({ _id: id });

    if (!movies) throw new MovieError("Invalid ID, movie not found", 404);
    return movies;
  },
};
