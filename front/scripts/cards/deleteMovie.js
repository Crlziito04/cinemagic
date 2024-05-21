const axios = require("axios");

const deleteMovie = async (_id) => {
  try {
    await axios.delete(`http://localhost:3000/movies/${_id}`);
    alert(`Pelicula eliminada`);
    window.location.reload(true);
  } catch (error) {
    return alert(error.message);
  }
};

module.exports = deleteMovie;
