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

//5
function displayHello() {
  var hora = new Date();  
  var minutos = hora.getMinutes();  
  

  minutos = minutos < 10 ? '0' + minutos : minutos;


  document.querySelector("title").innerHTML = hora.getHours() + ":" + minutos;
}
setInterval(displayHello, 6000);
//6
let ventana;

document.getElementById("abrir").addEventListener("click",function abrir(){
   ventana=window.open('','','width=800,height=400');
   ventana.document.write("<input type='button' value='Mover absoluto' id='movera'>")
   ventana.document.write("<input type='button' value='Mover relativo' id='moverr'>")
   ventana.document.write("<input type='button' value='Redimension absoluta' id='redi'>")
   ventana.document.write("<input type='button' value='Redimension relativa' id='redir'>")
   ventana.document.write("<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti amet voluptatibus sunt dicta quam sed fuga, mollitia tempora odit voluptas possimus tempore rerum doloribus quasi molestias. Nihil cum sequi aliquam alias nostrum veritatis fugiat at neque nemo. Sunt harum ut commodi corrupti saepe modi similique ab? Delectus, quidem nisi. Possimus maiores reprehenderit, quos sapiente similique laboriosam harum accusamus, provident laborum nostrum eaque aut, eum enim ipsum praesentium veritatis quis sequi. Distinctio, alias! Deserunt sint autem nam officiis amet, minus, laudantium asperiores porro nulla debitis, in animi illum quibusdam? Soluta commodi dolor fugit consequatur aperiam sint sed iure accusantium voluptatibus. Consectetur praesentium, earum fugiat eius dolorem sed adipisci pariatur repudiandae tempore, tempora rem optio iste! Dolor perferendis illo dolores, eum est veritatis accusantium expedita quisquam quae alias laudantium blanditiis, fugiat magni aliquam harum. Vel ullam in nihil. Odit similique officiis iure omnis ea? Facilis quae veniam similique nisi, excepturi est eius officia hic? Maiores, magni est. In officiis deserunt illum minima, consequatur doloribus, molestiae amet provident dignissimos aperiam omnis delectus harum reprehenderit quod velit itaque modi! Perspiciatis autem minus assumenda corrupti libero, labore sit accusantium maiores. Ducimus corporis nesciunt inventore! Ipsa soluta voluptatum praesentium quibusdam expedita quia vel, quis at architecto assumenda deserunt labore numquam harum sint corporis eligendi nobis fugit. Quia deleniti hic quibusdam! Exercitationem maxime, beatae voluptatibus autem repellendus, ipsum similique excepturi modi numquam nostrum rem veniam nisi blanditiis suscipit ratione. Cum aliquid placeat, ab dolore nobis amet repudiandae exercitationem, odit debitis deleniti quaerat et sapiente provident autem mollitia iste doloremque voluptatibus impedit voluptatem laborum repellat quisquam ullam soluta commodi! Mollitia illum harum cumque natus ipsam sit, error, ea, consequuntur adipisci voluptas blanditiis dignissimos architecto ad iusto quod rem deleniti nam saepe sunt. Fuga delectus voluptatum rem maiores, ipsum consequatur dolorum, magnam necessitatibus quia autem neque tenetur possimus?</h2>")
   ventana.document.getElementById("movera").addEventListener("click",function movera(){
    ventana.moveTo(500,100);
   })
   ventana.document.getElementById("moverr").addEventListener("click",function moverr(){
    ventana.moveBy(0,50);
   })

   ventana.document.getElementById("redi").addEventListener("click",function redi(){
    ventana.resizeTo(500,500);
   })
   ventana.document.getElementById("redir").addEventListener("click",function redir(){
    ventana.resizeBy(-50,-50);
   })
   

});

document.getElementById("abriryd").addEventListener("click",function abriryd(){
  ventana=window.open('','','width=800,height=400').close();

});

document.getElementById("cerrar").addEventListener("click",function cerrar(){
  ventana.focus();
  ventana.close();

});

document.getElementById("foco").addEventListener("click",function foco(){
  ventana.focus();

});

document.getElementById("qfoco").addEventListener("click",function qfoco(){

  ventana.blur();
});

document.getElementById("scrolla").addEventListener("click",function scrolla(){
  ventana.scrollTo(0,1000);
  ventana.focus()
});
 
document.getElementById("scrollr").addEventListener("click",function scrollr(){ 
  ventana.scrollBy(0,10);
  ventana.focus()
});
*/
//7
let texto = "¡¡Sólo quedan 20 días de ofertas!!";


function moverTextoCircular() {
    texto = texto.substring(1) + texto.charAt(0);
    document.querySelector("title").innerHTML = texto;  
}

setInterval(moverTextoCircular,300);
