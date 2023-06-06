//header
// Buscador 
let formulario = document.querySelector(".form")
let busqueda = document.querySelector(".busqueda")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (busqueda.value === "") {
        alert("El campo no puede estar vacío.");
      } else if (busqueda.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
      } else {
        this.submit()
      }
})

let url = "https://api.deezer.com/genre"
fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
