let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"
fetch(url)
.then(function(response) {
    return response.json()

  })
  .then(function(data) {
    console.log(data);
        let genresContainer = document.querySelector(".data")
        let html = ""
        let genre = data.data
    
        for(let i=1; i<genre.length; i++){
            html = `
            
            <article class="genero">
            <a class="a" href="./detail-genres.html?id=${genre[i].id}">
            <img src="${genre[i].picture_xl}" alt="">
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
