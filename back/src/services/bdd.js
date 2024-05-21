const axios = require("axios");

const bdd = async () => {
  try {
    const { data } = await axios.get(
      "https://henry-movies-dev-sgtm.3.us-1.fl0.io/"
    );
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = bdd;
