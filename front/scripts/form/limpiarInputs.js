const limpiarInputs = () => {
  const inputs = document.querySelectorAll("#form input");
  for (let i = 0; i < inputs.length - 2; i++) {
    inputs[i].value = "";
  }
};
module.exports = limpiarInputs;
