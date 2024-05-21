const dbCon = require("./src/config/dbCon");
const app = require("./src/server");
//Servidor escucha por puerto
const port = 3000;

dbCon()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
