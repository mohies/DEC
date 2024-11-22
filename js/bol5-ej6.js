window.addEventListener("load", inicializar, false);

function inicializar() {
    document.getElementById("imagen").addEventListener("click", validateForm)
}

function validateForm() {
    let x = document.getElementById("nombre").value;
    if (x !== x.toUpperCase()) {
        alert("tiene que estar en mayusculas");
        return false;
    } else if (x == "") {
        alert("esta vacio");
        return false;
    } else {
        document.getElementsByTagName('form')[0].action = "mailto()"; // o en vez de [0] puedo poner [name]
        document.onsubmit()[0];
    }

    return true
}