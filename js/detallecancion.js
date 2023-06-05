//header
function validateForm(event) {
    event.preventDefault();
    let busqueda = document.querySelector(".busqueda").value.trim();

    if (busqueda === "") {
        alert("El campo no puede estar vacío.");
      } else if (busqueda.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
      } else {
        // Si pasa las validaciones, puedes enviar el formulario o realizar otra acción
        document.querySelector(".form").submit();
      }
    
}