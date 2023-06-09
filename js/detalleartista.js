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
        .then(function(res){
          return res.json()
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
              <li>${array[i].title}</li>
            `;
          }
          html = `
          <img src="${data.picture}" alt="">
          <p class="nombre-cantante">Nombre del cantante: ${data.name}</p>
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

//otro end point para las canciones 
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
  .then(function(res){
    return res.json()
  })
  .then(function(info){
    console.log(info);
  })