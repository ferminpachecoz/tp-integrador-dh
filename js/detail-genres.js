//detalles
let id = new URLSearchParams(window.location.search).get("id")
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
fetch(url)
.then(function(response) {
  return response.json()

})
.then(function(data) {
  console.log(data);
  
      let generoContainer = document.querySelector(".datageneros")
      let html = ""
    
      
        html = `
        <img src="${data.picture_xl}" alt="">
        <p class="nombregenero">${data.name}</p>
       
        `;
        generoContainer.innerHTML += html

    })
.catch(function(error) {
  console.log("Error: " + error);
})