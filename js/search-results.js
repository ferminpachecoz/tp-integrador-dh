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

let query = new URLSearchParams(window.location.search).get("q")
let mainTitle = document.querySelector(".search-resultados h1")
mainTitle.innerText = `Resultados de búsqueda para: ${query}`;
console.log(query);
let btnTodo = document.querySelector('.search-resultados #btn-todo')
let btnCancion = document.querySelector('.search-resultados #btn-cancion')
let btnArtista = document.querySelector('.search-resultados #btn-artista')
let btnAlbum = document.querySelector('.search-resultados #btn-album')
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    let container = document.querySelector(".search-resultados .section-wrapper .container")
    let array = data.data
    let html = ""
    for (let i = 0; i<array.length; i++){
      html += `
        <article class="card">
          <a href="./detallecancion.html?id=${array[i].id}">
            <img src="${array[i].album.cover_xl}" alt="">
            <p class="title uk-text-truncate">${array[i].title}</p>
            <p class="subtitle">${array[i].artist.name}</p>
          </a>
        </article>
      `;
    }
    container.innerHTML = html;
  })

function eliminarRepetidos(array, obj) {
  var arraySinRepetidos = [];
  for (var i = 0; i < array.length; i++) {
    if(obj == "artist"){
      var valorActual = array[i];
      var estaRepetido = false;
      for (var j = 0; j < i; j++) {
        if (array[j].artist.id === valorActual.artist.id) {
          estaRepetido = true;
          break;
        }
      }
      if (!estaRepetido) {
        arraySinRepetidos.push(valorActual);
      }
    }else if(obj == "album"){
      var valorActual = array[i];
      var estaRepetido = false;
      for (var j = 0; j < i; j++) {
        if (array[j].album.id === valorActual.album.id) {
          estaRepetido = true;
          break;
        }
      }
      if (!estaRepetido) {
        arraySinRepetidos.push(valorActual);
      }
    }
  }
  return arraySinRepetidos;
}

btnAlbum.addEventListener("click", function(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${query}"`)
    .then(res => res.json())
    .then(data => {
      let newData = eliminarRepetidos(data.data, "album")
      let container = document.querySelector(".search-resultados .section-wrapper .container")
      let html = ""
      for(let i = 0; i < newData.length; i++){
        html += `
          <article class="card">
            <a href="./detallealbum.html?id=${newData[i].album.id}">
              <img src="${newData[i].album.cover_xl}" alt="">
              <p class="title uk-text-truncate">${newData[i].album.title}</p>
              <p class="subtitle">${newData[i].artist.name}</p>
            </a>
          </article>
        `;
      }
      container.innerHTML = html;
    })
})
btnArtista.addEventListener("click", function(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${query}"`)
    .then(res => res.json())
    .then(data => {
      let newData = eliminarRepetidos(data.data, "artist")
      let container = document.querySelector(".search-resultados .section-wrapper .container")
      let html = ""
      for(let i = 0; i < newData.length; i++){
        html += `
          <article class="card">
            <a href="./detalleartista.html?id=${newData[i].artist.id}">
              <img src="${newData[i].artist.picture}" alt="">
              <p class="title uk-text-truncate">${newData[i].artist.name}</p>
            </a>
          </article>
        `;
      }
      container.innerHTML = html;
    })
})
btnCancion.addEventListener("click", function(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}&index=25`)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      let container = document.querySelector(".search-resultados .section-wrapper .container")
      let array = data.data
      let html = ""
      for (let i = 0; i<array.length; i++){
        html += `
          <article class="card">
            <a href="./detallecancion.html?id=${array[i].id}">
              <img src="${array[i].album.cover_xl}" alt="">
              <p class="title uk-text-truncate">${array[i].title}</p>
              <p class="subtitle">${array[i].artist.name}</p>
            </a>
          </article>
        `;
      }
      container.innerHTML = html;
    })
})
btnTodo.addEventListener("click", function(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    let container = document.querySelector(".search-resultados .section-wrapper .container")
    let array = data.data
    let html = ""
    for (let i = 0; i<array.length; i++){
      html += `
        <article class="card">
          <a href="./detallecancion.html?id=${array[i].id}">
            <img src="${array[i].album.cover_xl}" alt="">
            <p class="title uk-text-truncate">${array[i].title}</p>
            <p class="subtitle">${array[i].artist.name}</p>
          </a>
        </article>
      `;
    }
    container.innerHTML = html;
  })
})