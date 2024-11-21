window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("imagen").addEventListener("click",validateForm)
}

function validateForm() {
    let x = document. getElementById("nombre").value;
    if (x !== x.toUpperCase()) {
        alert("tiene que estar en mayusculas");
        return false;
      }

     if (x == "") {
        alert("esta vacio");
        return false;
     }

     return true
  }