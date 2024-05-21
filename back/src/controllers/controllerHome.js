const getHome = (req, res) => {
  res.status(200).send("Estas en el HOME");
};

const postHome = (req, res) => {
  res.status(200).send("Hiciste un post en el HOME");
};

module.exports = { getHome, postHome };
