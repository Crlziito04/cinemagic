//validar url
const esURL = (urlString) => {
  const urlRegex =
    /^(https?):\/\/([^\s:/?#]+)(?:\/([^?\s]*))?(?:\?([^#\s]*))?(?:#([^\s]*))?$/;

  return urlRegex.test(urlString);
};

const validateData = ({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) => {
  if (title == "" || typeof title !== "string") {
    return alert("Nombre incompleto, Debe ser un string");
  }
  if (year == "" || typeof year !== "number" || year < 1850) {
    return alert("Debe ser un numero");
  }
  if (director == "" || typeof director !== "string") {
    return alert("Nombre incompleto, Debe ser un string");
  }
  if (duration == "" || typeof duration !== "string") {
    return alert("La duracion Debe ser un string");
  }
  if (!genre[0]) {
    return alert(
      "Especifique los generos de la pelicula. Ej: action, drama..."
    );
  }
  if (rate == "" || typeof rate !== "number" || rate < 0 || rate > 10) {
    return alert("Debe ser un numero del 1 al 10");
  }
  if (!esURL(poster)) {
    return alert("Url invalida");
  }
};

module.exports = validateData;
