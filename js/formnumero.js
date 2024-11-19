window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("smsForm").addEventListener("input",quedan)
   
}

function quedan(){
    let maxLength = 145;
    let actual = document.getElementById("smsText").value.length;
    let queda = maxLength - actual;
    document.getElementById("cuenta").textContent = queda + " caracteres restantes";
}