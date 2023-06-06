let id = new URLSearchParams(window.location.search).get("id")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);

    let title = document.getElementById('title-detalle-artista')
    title.innerText=data.name
  })