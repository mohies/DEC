/*
//1
var d = new Date(); 
var a = new Date(); 


if (a.getTime() > d.getTime()) {
    alert("La fecha introducida es mayor que la actual.");
} else if (a.getTime() === d.getTime()) {
    alert("Coinciden");
} else {
    alert("La fecha introducida no es mayor que la actual.");
}
//----------------------------------------------------------------------------------
//2
var f = prompt("YYYY-MM-DD");
var f2=prompt("YYYY-MM-DD");
var d = new Date(f); 
var a = new Date(f2);


if (d.getTime()>a.getTime()){
    alert("La primera fecha es posterio a la segunda")
}else if(d.getTime()<a.getTime()){
    alert("la primera fecha es inferior a la segunda")

}else{
    alert("Son iguales")
}

//----------------------------------------------------------------------------------
   

//4
var fecha1=new Date(2018,10,30,2,33,30)
var fecha2=new Date(2020,10,30,7,33,20)
var fecha3=new Date(2021,10,30,8,33,50)
var fecha4=new Date(2022,10,30,3,33,40)

let fechaMenor = fecha1;
let fechaMayor = fecha1;


if (fecha2 < fechaMenor) {
    fechaMenor = fecha2;
}
if (fecha2 > fechaMayor) {
    fechaMayor = fecha2;
}

if (fecha3 < fechaMenor) {
    fechaMenor = fecha3;
}
if (fecha3 > fechaMayor) {
    fechaMayor = fecha3;
}

if (fecha4 < fechaMenor) {
    fechaMenor = fecha4;
}
if (fecha4 > fechaMayor) {
    fechaMayor = fecha4;
}


const diferenciaSegundos = fechaMayor.getTime()*0.001-fechaMenor.getTime()*0.001;


console.log("Fecha menor:", fechaMenor);
console.log("Fecha mayor:", fechaMayor);
console.log("Diferencia en segundos:", diferenciaSegundos);
 
//----------------------------------------------------------------------------------


//5

let fecha = new Date(prompt("Introduce el dia de tu cumpleaños"));

let fecha2= new Date();

var m=0;


if(fecha.getDay()===fecha2.getDay() && fecha.getMonth()===fecha2.getMonth() && fecha.getFullYear()===fecha2.getFullYear()){
    alert("FELICIDIDADES")
}else if(fecha.getTime()>fecha2.getTime()){
    let diferencia = (fecha - fecha2) / (1000 * 60 * 60 * 24);
    diferencia=Math.round(diferencia)
        alert(diferencia)

}

//----------------------------------------------------------------------------------
*/

//6

var fa=new Date(2001,0,30);
var ano50=fa.getFullYear()+50;
for(var i=fa.getFullYear()+1;i<=ano50;i++){
    fa=new Date(i,0,30);
    
    switch(fa.getDay()){
        case(0):
        alert("En el año "+i+" cae en Domingo");
        break;
        case(1):
        alert("En el año "+i+" cae en Lunes");
        break;
        case(2):
        alert("En el año "+i+" cae en Martes");
        break;
        case(3):
        alert("En el año "+i+" cae en Miercoles");
        break;
        case(4):
        alert("En el año "+i+" cae en Jueves");
        break;
        case(5):
        alert("En el año "+i+" cae en Viernes");
        break;
        case(6):
        alert("En el año "+i+" cae en Sabado");
        break;
        default:
            break;
    }
}
