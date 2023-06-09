//detalles
//Informacion API artistas
  let id = new URLSearchParams(window.location.search).get("id")
  let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
  let musica =  ` `
  fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
        .then(function(response){
          return response.json()
        })
        .then(function(info){
          console.log(info);
          console.log(data);

          let artistasContainer = document.querySelector(".artistasdata")
          let html = "";
          let htmlTracklist = "";
          let array = info.data;
          for(let i = 0; i<array.length; i++){
            htmlTracklist += `
              <li class="list">${array[i].album.title}</li>
            `;
          }
          html = `
          <img src="${data.picture_xl}" alt="">
          <p class="nombre-cantante">Nombre del cantante: ${data.name}</p>
          <p class="Top-5-albumns">Top 5 albums:</p>
          <ul>
            ${htmlTracklist}
          </ul>
          `;
          artistasContainer.innerHTML += '<div class="artista-container">' + html + '</div>';
        })
        let artistasContainer = document.querySelector(".artistasdata")
        let html = ""
      
        
          html = `
          <img src="${data.picture}" alt="">
          <p class="nombre-cantante">Nombre del cantante: ${data.name}</p>
          <p class="lista de canciones">Lista de canciones: ${info.tracklist}</p>
          `;
          artistasContainer.innerHTML += '<div class="artista-container">' + html + '</div>';

      })
  .catch(function(error) {
    console.log("Error: " + error);
  })

