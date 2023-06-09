//busqueda
let formulario = document.querySelector(".form")
let busqueda = document.querySelector(".busqueda")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (busqueda.value === "") {
        alert("El campo no puede estar vacío.");
      } else if (busqueda.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
      } else {
        window.location.replace(`./search-results.html?q=${busqueda.value}`)
      }
})

//artistas
//informacion APi
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
        let spinner = document.getElementById("spinner-artista"); //Spiner de Carga
        let artistas = data.artists.data;
        let artistasContainer = document.querySelector(".artista")
        let html = ""

        spinner.style.display = "none"
        for(let i=0; i<artistas.length; i++){
          html = `
          <article class="card">
          <a href="./detalleartista.html?id=${artistas[i].id}">
          <img src="${artistas[i].picture_xl}" alt="">
          <p class="title uk-text-truncate">${artistas[i].name}</p>
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
  // Informacion API
  fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
        let spinner = document.getElementById("spinner-album"); //Spiner de Carga
        let albumes = data.albums.data;
        let albumContainer = document.querySelector(".album")
        let htmlalbum = ""

        spinner.style.display = "none"
        for(let i=0; i<albumes.length; i++){
          htmlalbum = `
        <article class="card">
          <a href="./detallealbum.html?id=${albumes[i].id}">
          <img src="${albumes[i].cover_xl}" alt="">
          <p class="title uk-text-truncate">${albumes[i].title}</p>
          <p class="subtitle">${albumes[i].artist.name}</p>
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
  // Informacion API 
  fetch(url)
  .then(function(response) {
      return response.json()
  
    })
    .then(function(data) {
          let spinner = document.getElementById("spinner-cancion"); //Spiner de Carga
          let canciones = data.tracks.data;
          let cancionesContainer = document.querySelector(".Canciones")
          let htmlcanciones = ""
        
          spinner.style.display = "none"
          for(let i=0; i<canciones.length; i++){
            htmlcanciones = `
          <article class="card">
            <a href="./detallecancion.html?id=${canciones[i].id}">
            <img src="${canciones[i].album.cover_xl}" alt="">
            <p class="title uk-text-truncate">${canciones[i].title}</p>  
            <p class="subtitle">${canciones[i].artist.name}</p>
            </a>
          </article>
            `;
            cancionesContainer.innerHTML += htmlcanciones
          }
        })
    .catch(function(error) {
      console.log("Error: " + error);
    })
