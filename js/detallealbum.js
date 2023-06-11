//detalles
// informacion API (album)
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
            tracksarray += `<li class="list"> ${tracks[i].title}</li>`

        }
        
        html = `
        <img src="${data.cover_xl}" alt="">
        <p class="disco">${data.title}</p>
        
        <p class="artista">Nombre del Artista: ${data.artist.name}</p>
        
        <p class="artista">Nombre del Género al que pertenece: ${genresarray}</p>
        
        <p class="artista">Fecha de publicación del disco: ${data.release_date}</p>

        <p class="listas">Lista de canciones: </p>
        
        <ol class="lista">  ${tracksarray}</ol>
      `;
      
      albumContainer.innerHTML += '<div class="album-container">' + html + '</div>';
      })
  .catch(function(error) {
    console.log("Error: " + error);
  })