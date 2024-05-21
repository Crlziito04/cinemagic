// let index = 0
// const fondo = (index, data) => {
//   const container = document.getElementById("container");
//   if (index > data.length - 1) {
//     index = 0;
//   }
//   container.style.backgroundImage = `url(${data[index].poster})`;
//   setTimeout(() => fondo(index + 1, data), 5000);
// };
const axios = require("axios");
const mostrarCards = require("./mostrarCards");

const api = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const datos = response.data;
    mostrarCards(datos);
  } catch (error) {
    const container = document.getElementById("container");
    const errorElement = document.createElement("h3");
    errorElement.innerText = `Error ${error.message}`;
    container.appendChild(errorElement);
  }
};

api();
