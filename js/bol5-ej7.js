window.addEventListener("load",inicializar,false);
function inicializar(){
document.getElementById("colorForm").addEventListener("change",cambiar)

}


function cambiar(event){
    const currentTarget = event.target.getAttribute("id");
    
    if(currentTarget=="rojo"){
        const element = document.querySelector("body");
        element.style.backgroundColor = 'red';  
    }else if(currentTarget=="verde"){
        const element = document.querySelector("body");
        element.style.backgroundColor = 'green'; 
    }else if(currentTarget=="azul"){
        const element = document.querySelector("body");
        element.style.backgroundColor = 'blue';  
    }else if(currentTarget=="amarillo"){
        const element = document.querySelector("body");
        element.style.backgroundColor = 'yellow';
    }else if(currentTarget=="naranja"){
        const element = document.querySelector("body");
        element.style.backgroundColor = 'orange';     
    }
}