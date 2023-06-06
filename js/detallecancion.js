let id = new URLSearchParams(window.location.search).get("id")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);

    let title = document.getElementById('title-detalle-cancion')
    title.innerText=data.title
  })