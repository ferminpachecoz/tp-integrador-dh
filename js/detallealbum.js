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
  let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`
  fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    
        let albumContainer = document.querySelector(".albumesdata")
        let html = ""
      
        let genres = data.genres.data;
        let genresarray = "";
    
        for (let i = 0; i < genres.length; i++) {
          genresarray += genres[i].name;
          if (i < genres.length - 1) {
            genresarray += ", ";
          }
        }

        let tracks = data.tracks.data;
        let tracksarray = "";
    
        for (let i = 0; i < tracks.length; i++) {
          tracksarray += tracks[i].title;
          if (i < tracks.length - 1) {
            tracksarray += ", ";
          }
        }
        
          html = `
          <img src="${data.cover}" alt="">
          <p class="title">Nombre del disco: ${data.title}</p>
          <p class="title">Nombre del artista: ${data.artist.name}</p>
          <p class="title">Nombre del género al que pertenece: ${genresarray}</p>
          <p class="title">Fecha de publicación del disco: ${data.release_date}</p>
          <p class="title">Lista de canciones: ${tracksarray}</p>
          `;
          albumContainer.innerHTML += html
        
      })
  .catch(function(error) {
    console.log("Error: " + error);
  })