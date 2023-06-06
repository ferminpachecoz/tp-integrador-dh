//header
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

//detalles
  let id = new URLSearchParams(window.location.search).get("id")
  let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
  fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    
        let artistasContainer = document.querySelector(".artistasdata")
        let html = ""
      
        
          html = `
          <img src="${data.picture}" alt="">
          <p class="nombre-cantante">Nombre del cantante: ${data.name}</p>
          <p class="lista de canciones">Lista de canciones: ${data.tracklist}</p>
          `;
          artistasContainer.innerHTML += '<div class="artista-container">' + html + '</div>';

      })
  .catch(function(error) {
    console.log("Error: " + error);
  })
