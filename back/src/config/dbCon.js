const mongoose = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  await mongoose.connect(process.env.MongO_URI);
};

module.exports = dbCon;
