window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("examen").addEventListener("submit",mostar)
    document.getElementById("respuesta1A").addEventListener("click",function(){
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
    })
}


function mostar(event){
    event.preventDefault();
    valor1=document.getElementById("respuesta1A").value;
    valor2=document.getElementById("respuesta2A").value;

    document.getElementById("correcta1").textContent="La respuesta correcta es "+valor1;
    document.getElementById("correcta2").textContent="La respuesta correcta es "+valor2;

}