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
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
fetch(url)
  .then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    
    /* let cancionesContainer = document.querySelector(".cancionesdata")
    let html = ""
    html = `
    <img src="${data.album.cover}" alt="">
    <p class="title">Nombre de la cancion: ${data.title}</p>
    <p class="title">nombre del artista: ${data.artist.name}</p>
    <p class="title">Nombre del disco al que pertenece la canción: ${data.album.title}</p>
    <a href="./playlist.html">
      ir a playlist
    </a>
    `;
    cancionesContainer.innerHTML += html */
        
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
