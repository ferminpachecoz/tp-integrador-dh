/* function insertarArtistas (artistas){
  let artists = document.getElementById("artistas")

  for(let i=0; i<artistas.length; i++){
    let html = `
    <div class="card">
    <img src="${artistas[i].picture}" alt="">
    <p class="title">${artistas[i].name}</p>
    </div>
    `;
    artists.innerHTML += html
  }
} */
function insertarDatosHome (chart){
  let artistas = chart.artists.data;
  let albumes = chart.albums.data;
  let canciones = chart.tracks.data;

  let artistasContainer = document.getElementById("artistas")
  let albumesContainer = document.getElementById("albumes")
  let cancionesContainer = document.getElementById("canciones")

  for(let i=0; i<artistas.length; i++){
    let html = `
    <div class="card">
    <img src="${artistas[i].picture}" alt="">
    <p class="title">${artistas[i].name}</p>
    </div>
    `;
    artistasContainer.innerHTML += html
  }
  for(let i=0; i<albumes.length; i++){
    if(albumes[i].id !== 448581475){
      let html = `
      <div class="card">
      <img src="${albumes[i].cover}" alt="">
      <p class="title">${albumes[i].title}</p>
      <p class="subtitle">${albumes[i].artist.name}</p>
      </div>
      `;
      albumesContainer.innerHTML += html
    }
  }
  for(let i=0; i<canciones.length; i++){
    let html = `
    <div class="card">
    <img src="${canciones[i].album.cover}" alt="">
    <p class="title">${canciones[i].title_short}</p>
    <p class="subtitle">${canciones[i].artist.name}</p>
    </div>
    `;
    cancionesContainer.innerHTML += html
  }
  console.log(chart);
}

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
  .then(res => res.json())
  .then(data =>insertarDatosHome(data))
  .catch(err => console.error(err))