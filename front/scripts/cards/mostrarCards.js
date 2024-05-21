const deleteMovie = require("./deleteMovie");

const mostrarCards = (data) => {
  const container = document.getElementById("container");
  console.log(data);
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card1");
    div.innerHTML = ` 
          <img
            src=${item.poster}
          />
          <div class="content">
            <h1 class="name">${item.title}</h1>
            <h3>${item.director}</h3>
            <h3 class="genre">${item.genre.join(", ")}</h3>
            <h3>⭐ ${item.rate} <span class="text-white" >|</span> ${
      item.year
    } <span class="text-white">| </span>${item.duration}</h3>
            <div class="icons mb-0">
              
              <button id="deleteBtn" type="button" data-id="${
                item._id
              }" class="btn btn-primary mb-2 p-2 ">Eliminar</button>
             
            </div>
          </div>
        
`;

    container.appendChild(div);
    // Obtener el botón dentro del elemento recién creado
    const deleteBtn = div.querySelector("#deleteBtn");
    // Agregar un event listener al botón
    deleteBtn.addEventListener("click", async (e) => {
      // Obtener el id del botón que desencadenó el evento
      const itemId = e.currentTarget.getAttribute("data-id");
      await deleteMovie(itemId);
    });
  });
};

module.exports = mostrarCards;

{
  /* <div class="card rounded" style="width: 18rem;">
                        <img src=${item.poster} class="card-img-top" alt=${
      item.title
    }> */
}
// <div class="card-body">
//   <h5 class="card-title text-center"><a href="#">${
//     item.title
//   }</a> </h5>
//   <p class="Genero: ${item.genre.join(", ")}</p>
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">Director: ${
//     item.director
//   }</li>
//   <li class="list-group-item">Duration: ${
//     item.duration
//   }</li>
//   <li class="list-group-item">Genre: ${item.genre.join(
//     ", "
//   )}</li>
//   </ul>
//    <div class="card-body d-flex justify-content-around  align-items-center py-1">
//      <h6>Rate: <span class="rounded-circle">${
//        item.rate
//      }</span></h6>
//     <button id="deleteBtn" type="button" data-id="${
//       item._id
//     }" class="btn btn-primary mb-0">Eliminar</button>
//   </div>
// </div>
