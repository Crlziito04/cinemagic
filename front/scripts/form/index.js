const limpiarInputs = require("./limpiarInputs");
const obtenerValues = require("./obtenerValues");

const borrarBtn = document.getElementById("borrar");
const enviarBtn = document.getElementById("enviar");

borrarBtn.addEventListener("click", () => limpiarInputs());
enviarBtn.addEventListener("click", (e) => obtenerValues(e));
