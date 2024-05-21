const axios = require("axios");
const arrayData = [];
//const URL = "https://students-api.2.us-1.fl0.io/movies";
const api = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    for (const item of data) {
      arrayData.push(item);
    }
  } catch (error) {
    const container = document.getElementById("container");
    const errorElement = document.createElement("h3");
    errorElement.innerText = `Error ${error.message}`;
    container.appendChild(errorElement);
  }
};

module.exports = {
  api,
  arrayData,
};
