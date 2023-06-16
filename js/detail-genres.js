//detalles
let id = new URLSearchParams(window.location.search).get("id")
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
fetch(url)
.then(function(response) {
  return response.json()

})
.then(function(data) {
    console.log(data);

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
    .then(function(response){
      return response.json()
    })
    .then(function(info){
      console.log(info);

      let generoContainer = document.querySelector(".datageneros")
      let html = ""
    
      
        html = `
        <article class="datageneros">
        <img src="${data.picture_xl}" alt="">
        <p class="nombregenero">${data.name}</p>
        </article>
        `;
        generoContainer.innerHTML += html
        
      let nombreartistas = document.querySelector(".articulos")
        let htmlart = ""
        let array = info.data
        let generoshtml = ""

        for(let i = 0; i<array.length; i++){
            generoshtml += 
            `
            <a class="generolink" href="./detalleartista.html?id=${array[i].id}">
            <article class="generosartistas">
            <img src="${array[i].picture}" alt="">
            <p>${array[i].name}</p>
            </article>
            </a>
            `;
        }
    htmlart =
        `
        ${generoshtml}
        `;
        nombreartistas.innerHTML += htmlart
      
    })

  

    })
.catch(function(error) {
  console.log("Error: " + error);
})