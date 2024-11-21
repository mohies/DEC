window.addEventListener("load", inicializar, false)

function inicializar() {
    document.getElementById("respuesta1A").addEventListener("click", mostrar);
    document.getElementById("respuesta1B").addEventListener("click", mostrar);
    document.getElementById("respuesta1C").addEventListener("click", mostrar);
    document.getElementById("respuesta1D").addEventListener("click", mostrar);

    document.getElementById("respuesta2A").addEventListener("click", mostrar);
    document.getElementById("respuesta2B").addEventListener("click", mostrar);
    document.getElementById("respuesta2C").addEventListener("click", mostrar);
    document.getElementById("respuesta2D").addEventListener("click", mostrar);
    /* document.getElementById("respuesta1A").addEventListener("click",function(){
         alert("CORRECTA")
     })
     document.getElementById("respuesta1B").addEventListener("click",function(){
         alert("Incorrecta")
     })
     document.getElementById("respuesta1C").addEventListener("click",function(){
         alert("Incorrecta")
     })
     document.getElementById("respuesta1D").addEventListener("click",function(){
         alert("Incorrecta")
     })
     document.getElementById("respuesta2A").addEventListener("click",function(){
         alert("CORRECTA")
     })

     document.getElementById("respuesta2B").addEventListener("click",function(){
         alert("Incorrecta")
     })
     document.getElementById("respuesta2C").addEventListener("click",function(){
         alert("Incorrecta")
     })
     document.getElementById("respuesta2D").addEventListener("click",function(){
         alert("Incorrecta")
     })*/
}


/*function mostar(event){
    event.preventDefault();
    valor1=document.getElementById("respuesta1A").value;
    valor2=document.getElementById("respuesta2A").value;

    document.getElementById("correcta1").textContent="La respuesta correcta es "+valor1;
    document.getElementById("correcta2").textContent="La respuesta correcta es "+valor2;

}*/

function mostrar(event) {
    const currentTarget = event.target.getAttribute("id");
    console.log(currentTarget);

    document.getElementById("correcta1").textContent = "";
    document.getElementById("correcta2").textContent = "";

    if (currentTarget === "respuesta1A") {
        document.getElementById("correcta1").textContent = "Esa es la respuesta correcta";
    } else if (currentTarget === "respuesta1B" || currentTarget === "respuesta1C" || currentTarget === "respuesta1D") {
        document.getElementById("correcta1").textContent = "No es la respuesta correcta";
    }


    if (currentTarget === "respuesta2A") {
        document.getElementById("correcta2").textContent = "Esa es la respuesta correcta";
    } else if (currentTarget === "respuesta2B" || currentTarget === "respuesta2C" || currentTarget === "respuesta2D") {
        document.getElementById("correcta2").textContent = "No es la respuesta correcta";
    }

}