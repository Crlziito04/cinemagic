const validateData = require("./validateData");

class Movie {
  constructor({ title, year, director, duration, genre, rate, poster }) {
    validateData(title);
    validateData(poster);
    validateData(director);
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.cartelera = [];
  }
  addMovie(movie) {
    this.cartelera.push(movie);
    return this.cartelera;
  }
}
module.exports = { Movie, Repository };
