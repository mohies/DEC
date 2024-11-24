window.addEventListener("load", inicializar, false);

function inicializar() {
    // Asocia el evento de clic en la imagen para validar el formulario
    document.getElementById("imagen").addEventListener("click", validateForm);
}

function validateForm(event) {

    event.preventDefault();


    let x = document.getElementById("nombre").value;

  
    if (x === "") {
        alert("El campo no puede estar vacío.");
        return false;
    }

    
    if (x !== x.toUpperCase()) {
        alert("El nombre debe estar en mayúsculas.");
        return false;
    }

    
    document.getElementsByTagName('form')[0].submit();
    return true;
}
