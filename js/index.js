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


//artistas
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    
        let artistas = data.artists.data;
        let artistasContainer = document.querySelector(".artista")
        let html = ""
      
        for(let i=0; i<artistas.length; i++){
          html = `
          <article class="card">
          <a href="./detalleartista.html?id=${artistas[i].id}">
          <div class="card">
          <img src="${artistas[i].picture}" alt="">
          <p class="title">${artistas[i].name}</p>
          </div>
          </a>
          </article>
          `;
          artistasContainer.innerHTML += html
        }
      })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  //albumes
  fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    
        let albumes = data.albums.data;
        let albumContainer = document.querySelector(".album")
        let htmlalbum = ""
      
        for(let i=0; i<albumes.length; i++){
          htmlalbum = `
        <article class="card">
          <a href="./detallealbum.html?id=${albumes[i].id}">
          <div class="card">
          <img src="${albumes[i].cover}" alt="">
          <p class="title">${albumes[i].title}</p>
          <p class="subtitle">${albumes[i].artist.name}</p>
          </div>
          </a>
        </article>
          `;
          albumContainer.innerHTML += htmlalbum
        }
      })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  //canciones
  fetch(url)
  .then(function(response) {
      return response.json()
  
    })
    .then(function(data) {
      console.log(data);
      
          let canciones = data.tracks.data;
          let cancionesContainer = document.querySelector(".Canciones")
          let htmlcanciones = ""
        
          for(let i=0; i<canciones.length; i++){
            htmlcanciones = `
          <article class="card">
            <a href="./datelladecancion.html?id=${canciones[i].id}">
            <div class="card">
            <img src="${canciones[i].album.cover}" alt="">
            <p class="title">${canciones[i].title}</p>  
            <p class="subtitle">${canciones[i].artist.name}</p>
            </div>
            </a>
          </article>
            `;
            cancionesContainer.innerHTML += htmlcanciones
          }
        })
    .catch(function(error) {
      console.log("Error: " + error);
    })
