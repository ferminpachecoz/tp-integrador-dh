//detalles
//Informacion API artistas
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
