
console.log(localStorage.getItem("cancion"));
if(localStorage.getItem("cancion")){
  let storage = JSON.parse(localStorage.getItem("cancion"))
  let container = document.querySelector('.mi-playlist .container')
  let html = ""
  for(let i = 0; i<storage.length; i++){
    html += `
    <article class="card">
      <a href="./detallecancion.html?id=${storage[i].id}">
        <img src="${storage[i].cover}" alt="">
        <p class="title uk-text-truncate">${storage[i].title}</p>
        <p class="subtitle">${storage[i].artist}</p>
      </a>
      <button class="btn-borrar" value="${storage[i].id}" >Borrar</button>
    </article>
    `
  }
  container.innerHTML = html;
}
let arrayButton = document.querySelectorAll("section .mi-playlist .container .card .btn-borrar")
for (let i = 0; i<arrayButton.length; i++){
  arrayButton[i].addEventListener("click", function(){
    if(confirm("¿Estas seguro que quieres borrar esta cancion de tu playlist?")){
      let storage = JSON.parse(localStorage.getItem("cancion"))
      let newStorage = []
      for(let j=0; j<storage.length; j++){
        if(storage[j].id != arrayButton[i].value){
          newStorage.push(storage[j])
        }
      }
      localStorage.setItem("cancion", JSON.stringify(newStorage))
      console.log(localStorage.getItem("cancion"));
      window.location.replace("./playlist.html")
    }
  })
}