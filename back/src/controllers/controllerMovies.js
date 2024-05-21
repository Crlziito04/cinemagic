const movieService = require("../services/movieService");
const schema = require("../services/validateJoi");

const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postMovies = async (req, res) => {
  console.log(req.body)
  // const { title, year, director, duration, genre, rate, poster } = req.body;
  // try {
  //   const validateBody = await schema.validateAsync({
  //     title,
  //     year,
  //     director,
  //     duration,
  //     genre,
  //     rate,
  //     poster,
  //   });
  //   const createMovie = await movieService.postMovies(validateBody);
  //   res.status(201).json(createMovie);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminatedMovie = await movieService.deleteMovies(id);
    //const movies = await movieService.getMovies();
    //res.status(200).json(movies);
    res.status(204).json(eliminatedMovie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = { getMovies, postMovies, deleteMovies };
