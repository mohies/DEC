window.addEventListener("load", inicializar, false);

function inicializar() {
    document.getElementById("smsForm").addEventListener("input", quedan)
    document.getElementById("smsForm").addEventListener("submit", quedan)

}

function quedan() {
    let maxLength = 145;
    let actual = document.getElementById("smsText").value.length;
    let queda = maxLength - actual;
    document.getElementById("cuenta").textContent = queda + " caracteres restantes";


    let area = document.getElementById("smsText").value;
    const formato = /^\w+$/;
    if (!formato.test(area)) {
        document.getElementById('submit').disabled = true; // tengo dos opciones
        document.getElementById('error').textContent="ERROR NO CARACTERES ESPECIALES";
    } else {
        document.getElementById('submit').disabled = false; // Habilita el botón si pasa la validación
        document.getElementById('error').textContent="";
    }
    


}