//header
function validateForm(event) {
    event.preventDefault();
    let busqueda = document.querySelector(".busqueda").value.trim();

    if (busqueda === "") {
        alert("El campo no puede estar vacío.");
      } else if (busqueda.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
      } else {
        document.querySelector(".form").submit();
      }
    
}