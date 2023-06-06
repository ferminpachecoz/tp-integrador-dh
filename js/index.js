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
    <a href="./detalleartista.html?id=${artistas[i].id}">
    <div class="card">
    <img src="${artistas[i].picture}" alt="">
    <p class="title">${artistas[i].name}</p>
    </div>
    </a>
    `;
    artistasContainer.innerHTML += html
  }
  for(let i=0; i<albumes.length; i++){
    if(albumes[i].id !== 448581475){
      let html = `
      <div class="card">
        <img src="${albumes[i].cover}" alt="">
        <a class="title" href="./detallealbum.html?id=${albumes[i].id}">${albumes[i].title}</a>
        <a class="subtitle" href="./detalleartista.html?id=${albumes[i].artist.id}">${albumes[i].artist.name}</a>
      </div>`;
      albumesContainer.innerHTML += html
    }
  }
  for(let i=0; i<canciones.length; i++){
    let html = `
    <div class="card">
      <img src="${canciones[i].album.cover}" alt="">
      <a class="title" href="./detallecancion.html?id=${canciones[i].id}">${canciones[i].title_short}</a>
      <a class="subtitle" href="./detalleartista.html?id=${canciones[i].artist.id}">${canciones[i].artist.name}</a>
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