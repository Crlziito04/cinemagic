const validateData = (value) => {
  if (!value || typeof value !== "string") {
    throw new Error(`cadena vacia o debe ser un string`);
  }
};
module.exports = validateData;
