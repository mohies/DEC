/*function area(){

    var radio=prompt("Introducen el area");

    var area= 4*Math.PI*radio**2;
    var volumen= (4/3)*Math.PI*radio**3;
    alert("El area es "+area);
    alert("EL volumen es "+volumen);
}

area();


    
function absoluto(){
    var n = prompt("Introudce num");
    while(isNaN(n)){
         n = prompt("Introudce num valido");
    } 
    if(n>0 || n <0 ){
    alert(Math.abs(n));

   }
}

absoluto();


    function inverso(){
        var n = prompt("Introduce numero")

        if (n===0){
            alert("Error por el 0")
        }else{
            alert("El resultado del inverso es 1/"+n+" "+1/n);
        }

    }
    inverso()



 function tiempo(){
    hora= prompt("Introduce una hora en formato 00:00");
    while(hora<"00:00" || hora>"23:59"){
        hora=prompt("Introduce un valor correcto");
    }
    var h1="07:30";
    var h2="14:00";
    var h3="14:01";
    var h4="20:30";
    var h5="20:31";
    var h6="07:29";

    if(hora>=h1 && hora<=h2 ){
        alert("Buenos dias");
    }else if(hora>=h3 && hora<=h4){
        alert("Buenas tardes");
    }else {
        alert("Buenas noches");
        
    }


}

tiempo();


function bisiesto(){
    var ano = prompt("Introduce un año");

    if((ano % 400 === 0) || (ano % 4 == 0 && ano % 100 !==0)){
        alert("El año es bisiesto")
    }else{
        alert("no es bisiesto")
    }
}

bisiesto()



function determinarCuadrante() {
    var x = parseFloat(prompt("Introduce la coordenada X:"));
    var y = parseFloat(prompt("Introduce la coordenada Y:"));

   if (x === 0 && y === 0) {
        alert("El punto está en el origen.");
    } else if (x === 0) {
        alert("El punto está sobre el eje Y.");
    } else if (y === 0) {
        alert("El punto está sobre el eje X.");
    } else if (x > 0 && y > 0) {
        alert("El punto está en el primer cuadrante.");
    } else if (x < 0 && y > 0) {
        alert("El punto está en el segundo cuadrante.");
    } else if (x < 0 && y < 0) {
        alert("El punto está en el tercer cuadrante.");
    } else if (x > 0 && y < 0) {
        alert("El punto está en el cuarto cuadrante.");
    }
}


determinarCuadrante();



function cambio(){

    var precio = parseFloat(prompt("introduce precio del producto"));
    var cantidad= parseFloat(prompt("Introduce la cantidad que quieres dar para pagar"));
        var monedas=[0.01,0.05,0.10,0.20,0.5,1,2,5,10,20,50,100,200];
    while(cantidad < precio){
        var cantidad= prompt("No puedes pagar menos")
    }
    var resultado= parseFloat((cantidad - parseFloat(precio)));

    monedas.forEach(element => {
        if(resultado % element ===0){
            alert("La vuelta es " + element)
        }
        
    });
    
}

cambio()



function naturales(){
    var n = prompt("introduce un numero")
    var suma=0;
    for(i=0;i<=n;i++){
        var cuadrado = i**2;
        alert("El cuadrado del numero "+ i+ " es "+cuadrado);
        var cubo=i**3;
        alert("El cuadrado del numero "+ i + " es "+cubo);
        suma=suma+i;
        
            
        
    }
    alert("La suma de todos es " + suma);
}

naturales()


function cambio2(){

    var dinero= parseFloat(prompt("Introduce el dinero euros que quieres cambiar"));
    var opcion= parseInt(prompt("Introduce que opcion quieres cambiar 1=dolares/2=Libras/3=Yenes/4=Franco Suizo/5=Corona Noruega"));
 
    switch(opcion){
     case 1:
         var dolares = dinero * 1.12;
         alert("AQUI TIENES EL CAMBIO A DOLARES " + parseFloat(dolares));
         break;
    
     case 2:
         var libras = dinero * 0.84;
         alert("AQUI TIENES EL CAMBIO A libras " + libras);
         break;
    
     case 3:
         var yenes = dinero * 160.71;
         alert("AQUI TIENES EL CAMBIO A YENES " + yenes);
         break;
    
     case 4:
         var franco = dinero * 0.95;
         alert("AQUI TIENES EL CAMBIO A franco suizo " + franco);
         break;
    5
     case 5:
         var corona = dinero * 11.71;
         alert("AQUI TIENES EL CAMBIO A DOLARES " + corona);
         break;
    
     default:
          alert("No esta disponible este tipo de cambio");
 }
 }
 
 cambio2();




 function mes(){
    let dia=prompt("Introduce el dia");
    let mes = parseInt(prompt("Introduce el numero del mes que quieras del 1 al 12"));
    while(mes<1 && mes>12){
        let mes = prompt("Incorrecto introduce el mes bien");
    }

    switch(mes){
        case 1:
            if(dia>=1 && dia<=31){
                alert("Estamos a fecha de " + dia + " Enero")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 2:
                if(dia>=1 && dia<=28){
                    alert("Estamos a fecha de " + dia + " Febrero")
                }else{
                    alert("No existe ese dia en el mes")
                }
                break;
            case 3:
                if(dia>=1 && dia<=31){
                        alert("Estamos a fecha de " + dia + " Marzo")
                }else{
                    alert("No existe ese dia en el mes")
                }
                break;
            case 4:
                if(dia>=1 && dia<=30){
                     alert("Estamos a fecha de " + dia + " Abril")
                 }else{
                    alert("No existe ese dia en el mes")
                }
                 break;
            case 5:
                if(dia>=1 && dia<=31){
                      alert("Estamos a fecha de " + dia + " Mayo")
                 }else{
                    alert("No existe ese dia en el mes")
                }
                 break;
            case 6:
                if(dia>=1 && dia<=30){
                     alert("Estamos a fecha de " + dia + " Junio")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 7:
                 if(dia>=1 && dia<=31){
                     alert("Estamos a fecha de " + dia + " Julio")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 8:
                 if(dia>=1 && dia<=31){
                     alert("Estamos a fecha de " + dia + " Agosto")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 9:
                 if(dia>=1 && dia<=30){
                     alert("Estamos a fecha de " + dia + " Septiembre")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 10:
                 if(dia>=1 && dia<=31){
                     alert("Estamos a fecha de " + dia + " Octubre")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 11:
                if(dia>=1 && dia<=30){
                      alert("Estamos a fecha de " + dia + " Noviembre")
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            case 12:
                if(dia>=1 && dia<=31){
                     alert("Estamos a fecha de " + dia + " Diciembre")
          
            }else{
                alert("No existe ese dia en el mes")
            }
            break;
            default:
                alert("Error")
        
    }

    
 }

 mes()


 function asignatura(){
    let nota=prompt("Introduce la nota ");
    if (nota<5){
        alert("SUSPENSO");
    }else if (nota>=5 && nota<6){
        alert("APROBADO");
    }else if(nota>=6 && nota<7){
        alert("BIEN");
    }else if(nota>=7 && nota<=8){
        alert("NOTABLE");
    }else if(nota=>9 && nota<=10){
        alert("SOBRESALIENTE"); 
    }else{
        alert("Esta nota no esta disponible ")
    }
 }
 asignatura();


function tarot(){
    let dia=parseInt(prompt("Introduce el dia"));
    let mes=parseInt(prompt("Introduce el mes"));
    let ano = parseInt(prompt("Introduce el año"));

    if((dia>=1 && dia<=31 && ano>0) && (mes===1 || mes===3 || mes===5 || mes===7|| mes===8|| mes===10|| mes===12)){
        alert("La fecha es "+dia+"/"+mes+"/"+ano);
        var cuenta1=dia+mes+ano;
        alert("La cuenta del numero Tarot es "+ cuenta1);
        
        var cuenta2=2042;

     
        
    }else if((dia>=1 && dia<=28 && ano>0)&&(mes===2)){
        alert("La fecha es "+dia+"/"+mes+"/"+ano);
    }else if((dia>=1 && dia<=31 && ano>0) && (mes===4 || mes===6 || mes===9 || mes===11)){
        alert("La fecha es "+dia+"/"+mes+"/"+ano);

    }
}

tarot()


function horas(){
    var seg=parseInt(prompt("Introduce el numero de segundos a convertir "))
    
    convertir_seg=parseInt(seg%60);
    conv_seg=parseInt(seg/60);
    convertir_min=parseInt(conv_seg%60);
    conv_min=parseInt(conv_seg/60);
    alert(convertir_min);


    if(conv_seg===60 ){
      
        alert(conv_min+":"+convertir_min+":"+convertir_seg);
    }else{
        alert(conv_min+":"+convertir_min+":"+convertir_seg);

    }

    

   
}

horas()
  s*/

function triler(){
    var intuicion=parseInt(prompt("Introduce donde crees que esta la bola "));
    var bola=Math.floor(Math.random()*3)+1;
    
    
    while(intuicion<1 || intuicion>3 || isNaN(intuicion)){
        var intuicion=parseInt(prompt("Introduce un número de posición correcto "));
    }

    if(intuicion==bola){
        alert("Has acertado eres un máquina ");
    }else{
        alert("No has acertado mala suerte");
    }

    var jugar=confirm("¿Quieres jugar otra vez?")

    if(jugar){
        triler()
    }else{
        alert("Ohh que pena hasta la próxima")
    }

}

triler()
