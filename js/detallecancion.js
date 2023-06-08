//header
// Buscador 
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
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
fetch(url)
  .then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
    let segundos = document.getElementById('segundos');
    let artista = document.getElementById('artista');
    let titulo = document.getElementById('titulo');
    let fecha = document.getElementById('fecha');
    let explicito = document.getElementById('explicito');
    let imagen = document.getElementById('imagen-album');
    let mainTitle = document.querySelector('.song-title')

    let buttonAgregar = document.getElementById('btn-agregar')
    
    segundos.innerText = data.duration + " segundos";
    artista.innerText = data.artist.name;
    titulo.innerText = data.title;
    fecha.innerText = data.release_date;
    explicito.innerText = data.explicit_lyrics?"Si":"No";
    imagen.src = data.album.cover_xl;
    mainTitle.innerText = data.title;
    buttonAgregar.idCancion = data.id;
    buttonAgregar.title = data.title;
    buttonAgregar.artist = data.artist.name;
    buttonAgregar.cover = data.album.cover_xl
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
/* Agregar cancion a mi playlist */
let buttonAgregar = document.getElementById('btn-agregar')
buttonAgregar.addEventListener('click', function(){
  let storage = JSON.parse(localStorage.getItem('cancion'))
  let obj = {
    id: buttonAgregar.idCancion,
    artist: buttonAgregar.artist,
    title: buttonAgregar.title,
    cover: buttonAgregar.cover
  }
  if (confirm("¿Estás seguro que quieres agregar esta canción a tu playlist?")) {
    if(localStorage.getItem("cancion")){
      let repetido = false
      for(let i=0; i<storage.length;i++){
        if(storage[i].id == obj.id){
          repetido = true
        }
      }
      if (!repetido){
        storage.push(obj)
        localStorage.setItem("cancion", JSON.stringify(storage))
      }else{
        alert("Esta canción ya se encuentra en tu playlist")
      }
    }else{
      let favoritos = JSON.stringify([obj])
      localStorage.setItem("cancion", favoritos)
    }
  } else {
    
  }
  console.log(localStorage.getItem("cancion"));
})