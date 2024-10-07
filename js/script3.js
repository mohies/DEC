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