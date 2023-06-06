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

let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"
fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
        let genresContainer = document.querySelector(".genredata")
        let html = ""
        let genre = data.data
    
        for(let i=1; i<genre.length; i++){
            html = `
            
            <article class="genero">
            <a class="a" href="./detail-genres.html?id=${genre[i].id}">
            <img src="${genre[i].picture}" alt="">
            <p>${genre[i].name}</p>
            </a>
            </article>
            `;
            genresContainer.innerHTML += html
          }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
