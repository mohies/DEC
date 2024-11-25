window.addEventListener("load", inicializar, false);

function inicializar() {
    document.getElementById("pass1").addEventListener("blur", validarCampo);
    document.getElementById("pass2").addEventListener("blur", validarCampo);
}

function validarCampo(event) {
    const value = event.target; 
    const value2 = value.value.trim(); 

 
    if (value2 === "") {
        if(value.getAttribute("id")=="pass1"){
            document.getElementById("error1").textContent="No puede quedar vacio"
        }else{
            document.getElementById("error1").textContent=""
        }

        if(value.getAttribute("id")=="pass2"){
            document.getElementById("error2").textContent="No puede quedar vacio"
        }else{
            document.getElementById("error2").textContent=""
        }
       
        value.focus();  
}