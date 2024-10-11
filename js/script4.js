/*//BOM
//1
var ventana = window.open();

ventana.document.write("<p>Dame esto</p>");

for (var v in window.navigator){
    ventana.document.write("<pre>" + v + ": " + window.navigator[v] + "</pre>");
}



//2
let name = window.navigator.appCodeName;
let version= window.navigator.appVersion;
let so=window.navigator.userAgent;
console.log("Nombre "+name+" Version "+version+" so: "+so)

//3
let nuevaVentana;

document.getElementById('abrirVentana').addEventListener('click', function () {
  
    nuevaVentana = window.open('', 'Ventana nueva', 'width=400,height=200');
    nuevaVentana.document.write("<h1 style='font-size:100px'>El ojo es la ventana a tu alma</h1>");
    nuevaVentana.focus();
});

document.getElementById('cerrarVentana').addEventListener('click', function () {
        nuevaVentana.close();
        
});

//4
let ancho = window.innerWidth;
let altura= window.innerHeight;
let color=window.screen.colorDepth;
alert("el ancho "+ancho +"\nla altura: "+ altura + "\nColor "+ color)
*/

//5
setInterval(displayHello, 60000);

function displayHello() {
  var hora = new Date();
  minutos = minutos < 10 ? '0' + minutos : minutos;
  document.querySelector("title").innerHTML = (hora.getHours()+":"+minutos);
}
