
/*//1

function contar(){
        var nombre=prompt("Introduce un nombre")
        var contador=0;
        var contador2=0;
        var contado3=0;
        while(nombre!="ULTIMO" &&  isNaN(nombre)){

            if(nombre.charAt(0)=="C"){
                contador2++;
            }

            if(nombre.search("ñ")){
                contado3++;
            }


            contador++;
            var nombre=prompt("Introduce otro nombre")

        }

        alert("Comienzan por C "+contador2+" y comienza por ñ "+contado3)
}

contar()

*/
function empiezan(){
        var frase=prompt("Introduce una palabra que analizar ");

        var contador=1;
        var contador2=0;

        if(frase.charAt(i+1)=="A"){
            contador2++;
        }

        for(var i=0;i<frase.length;i++){
            if(frase.charAt(i)==" "){
                contador++;

                if(frase.charAt(i+1)=="A"){
                    contador2++;
                }
            }

           
        }
        alert("Tiene tantas palabras "+contador)
        
        alert(contador2)

function parentesis(){
    var cadena=prompt("Introduce una cadena de texto que podria contener parentesis ")
    var vacia=" ";

    for(var i=0; i<cadena.length; i++){
        if(cadena.charAt(i)=="("){
            for(var j=i+1;j<cadena.length;j++){
                if(cadena.charAt(j)!=")"){  
                    vacia=vacia+cadena.charAt(j);
                }else{
                    break;
                }    


            }
        }
    }

    alert(vacia);
}
parentesis()
           
        

    

    
           
           
      

}
empiezan()
