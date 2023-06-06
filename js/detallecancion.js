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

//detalles

let id = new URLSearchParams(window.location.search).get("id")
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
fetch(url)
  .then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    let segundos = document.getElementById('segundos');
    let artista = document.getElementById('artista');
    let titulo = document.getElementById('titulo');
    let fecha = document.getElementById('fecha');
    let explicito = document.getElementById('explicito');
    let imagen = document.getElementById('imagen-album');
    let mainTitle = document.querySelector('.song-title')
    
    segundos.innerText = data.duration + " segundos";
    artista.innerText = data.artist.name;
    titulo.innerText = data.title;
    fecha.innerText = data.release_date;
    explicito.innerText = data.explicit_lyrics?"Si":"No";
    imagen.src = data.album.cover_xl;
    mainTitle.innerText = data.title;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
