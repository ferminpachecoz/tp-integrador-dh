let id = new URLSearchParams(window.location.search).get("id")

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);

    let title = document.getElementById('title-detalle-album')
    title.innerText=data.title
  })